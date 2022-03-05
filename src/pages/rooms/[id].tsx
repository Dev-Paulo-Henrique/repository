import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { database } from "../../services/firebase";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useRoom from "../../hooks/useRoom";
import Question from "../../components/Question";
import RoomCode from "../../components/RoomCode";
import { parseCookies } from "nookies";
import Button from "../../components/Button";
import logoSVG from "../../assets/images/logo.svg";
import styles from "../../assets/styles/pages/Room.module.scss";

type RoomQueryParams = {
  id?: string;
};

export default function Room() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();
  const { id: roomId }: RoomQueryParams = router.query;
  const [newQuestion, setNewQuestion] = useState("");
  const [newState, setNewState] = useState("")
  const { questions } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault(); 

    // getState

    if(!sessionStorage.getItem('new')){
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
      type: sessionStorage.getItem('new')
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
    // setNewState("");
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
    <>
      <Head>
        <title>Enviar sugestão</title>
      </Head>

      <header className={styles.header}>
        <div>
          <Image src={logoSVG} alt="Letmeask" />
          {/* <div className="table">
              <span className="one">Adoração</span>
              <span className="two">Celebração</span>
              <span className="three">Extra</span>
              <span className="four">Família</span>
              <span className="five">Missões</span>
              <span className="six">Santa ceia</span>
          </div> */}
          <RoomCode/>
        </div>
      </header>

      <main className={styles.main}>
        <div>
          <h1>Repertório
          </h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{" "}
              {questions.length > 1 ? "sugestões" : "sugestão"}
            </span>
          )}
        </div>

        <form
          onSubmit={handleSendQuestion}
          method="POST"
          className={styles.formAsk}
        >
          <textarea
            placeholder="Adicionar artista/louvor"
            value={newQuestion}
            onChange={(event) => setNewQuestion(colocarAcentos(event.target.value))}
          />

          <div>
            {user ? (
              <div className={styles.userInfo}>
                <Image
                  src={user?.avatar}
                  alt={user.name}
                  width="32"
                  height="32"
                />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma sugestão,{" "}
                <button type="button" onClick={handleLogin}>
                  faça seu login
                </button>
                .
              </span>
            )}
            <select className={styles.select} name="select" id="select" onChange={(event) => sessionStorage.setItem('new', event.target.value)}>
            <option value="Selecionar" disabled selected>Selecionar</option>
            <option value="Adoração">Adoração</option>
            <option value="Celebração">Celebração</option>
            <option value="Extra">Extra</option>
            <option value="Família">Família</option>
            <option value="Missões">Missões</option>
            <option value="Santa ceia">Santa ceia</option>
            </select>
            <Button type="submit" disabled={!user}>
              Enviar sugestão
            </Button>
          </div>
        </form>

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
            />
          );
        })}
      </main>
    </>
  );
}

// type FirebaseRooms = Record<
//   string,
//   {
//     authorId: string;
//     questions: {};
//     title: string;
//   }
// >;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const roomRef = await database.ref(`rooms/${params.id}`).get();
//   const firebaseRoom: FirebaseRooms = roomRef?.val();

//   if(!firebaseRoom) {
//     return {
//       props: {},
//       revalidade: 30,
//     }
//   }

//   return {
//     props: {
//       title: 'Repertório',
//     },
//     revalidate: 30,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const roomRef = await database.ref(`rooms`).get();
//   const firebaseRooms: FirebaseRooms[] = roomRef.val();

//   if(!firebaseRooms) {
//     return {
//       paths: [],
//       fallback: "blocking",
//     }
//   }

//   const roomsProps = Object.entries(firebaseRooms).map(([key]) => {
//     return {
//       roomId: key,
//     };
//   });

//   const paths = roomsProps.map((room) => {
//     return {
//       params: {
//         id: room.roomId,
//       },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// };
