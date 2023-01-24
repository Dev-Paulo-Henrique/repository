import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { database } from "../../../services/firebase";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useRoom from "../../../hooks/useRoom";
import Question from "../../../components/Question";
import RoomCode from "../../../components/RoomCode";
// import { parseCookies } from "nookies";
import Button from "../../../components/Button";
import logoSVG from "../../../assets/images/logo.svg";
import styles from "../../../assets/styles/pages/Room.module.scss";

type RoomQueryParams = {
  id?: string;
};

export default function Room() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();
  const { id: roomId }: RoomQueryParams = router.query;
  const [newQuestion, setNewQuestion] = useState("");
  const [newLink, setNewLink] = useState("")
  const [newTom, setNewTom] = useState("")
  const [newType, setNewType] = useState("")
  const { questions } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault(); 

    if(!newType){
      toast.error("Campo deve ser selecionado!", {
        style: {
          background: "#F56565",
          color: "#FFF",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#F56565",
        },
      });
      return;
    }

    if (newQuestion.trim() === "") {
      toast.error("Campo deve ser preenchido!", {
        style: {
          background: "#F56565",
          color: "#FFF",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#F56565",
        },
      });
      return;
    }

    if (!user) {
      toast.error("Usuário não encontrado", {
        style: {
          background: "#F56565",
          color: "#FFF",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#F56565",
        },
      });
      return;
    }
    
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
      type: newType,
      link: newLink,
      tom: newTom
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    
    toast.success("Sugestão enviada!", {
      style: {
        background: "#68D391",
        color: "#FFF",
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391",
      },
    });

    // console.log($('#select').val())
    sessionStorage.removeItem('new')
    setNewQuestion("");
    setNewLink("");
    setNewTom("")
    setNewType("")
  }

  function colocarAcentos(s: string) {
    return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[- ]+/g, "-");
}

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    toast.success("Logado com sucesso!", {
      style: {
        background: "#68D391",
        color: "#FFF",
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391",
      },
    });
  }

  
  return (
      <main className={styles.main}>
        <div>
          <h1>Repertório</h1>
          {questions.length > 0 && (
            <span style="background-color:#f70;">
              {questions.length}{" "}
              {questions.length > 1 ? "sugestões" : "sugestão"}
            </span>
          )}
        </div>

        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              likeId={question.likeId}
              likeCount={question.likeCount}
              id={question.id}
              roomId={roomId}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
              type={question.type}
              link={question.link}
              tom={question.tom}
            />
          );
        })}
      </main>
  );
}

type FirebaseRooms = Record<
  string,
  {
    authorId: string;
    questions: {};
    title: string;
  }
>;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const roomRef = await database.ref(`rooms/${params.id}`).get();
  const firebaseRoom: FirebaseRooms = roomRef?.val();

  if(!firebaseRoom) {
    return {
      props: {},
      revalidade: 30,
    }
  }

  return {
    props: {
      title: 'Repertório',
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const roomRef = await database.ref(`rooms`).get();
  const firebaseRooms: FirebaseRooms[] = roomRef.val();

  if(!firebaseRooms) {
    return {
      paths: [],
      fallback: "blocking",
    }
  }

  const roomsProps = Object.entries(firebaseRooms).map(([key]) => {
    return {
      roomId: key,
    };
  });

  const paths = roomsProps.map((room) => {
    return {
      params: {
        id: room.roomId,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};
