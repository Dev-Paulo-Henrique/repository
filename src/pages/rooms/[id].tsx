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
// import { parseCookies } from "nookies";
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
  const [newLink, setNewLink] = useState("")
  const { questions } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault(); 

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
      type: sessionStorage.getItem('new'),
      link: newLink
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
          <h1>Repertório</h1>
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
          disabled
            placeholder="Adicionar artista/louvor"
            value={newQuestion}
            onChange={(event) => setNewQuestion(colocarAcentos(event.target.value))}
          />
          <input type="url"
          disabled
          required
            placeholder="https://www.youtube.com"
            className="youtube"
            value={newLink}
            onChange={(event) => {setNewLink(event.target.value)}}
            // value={newQuestion}
            // onChange={(event) => setNewQuestion(colocarAcentos(event.target.value))}
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
            <select disabled className={styles.select} name="select" id="select" onChange={(event) => sessionStorage.setItem('new', event.target.value)}>
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

        <section className={`${styles.question}`} onDoubleClick={() => {document.location.assign('https://www.cifraclub.com.br/izaac-santos/vou-deixar-queimar-aumenta-o-fogo/')}}>
      <a>
        <p>Sala de Adoração - Izaac</p>
      <span className="status">19/03</span>
        </a>
        </section>
        <section className={`${styles.question}`}>
      <a>
        <p>Sala de Adoração - Medley(D/Bm)</p>
      <span className="status">19/03</span>
        </a>
      <footer>
        <div className={styles.userInfo}>
          <span>
          </span>
            <a href="https://www.cifraclub.com.br/theo-rubia/pode-morar-aqui/" target="_blank">Theo</a>
            <a href="https://www.cifraclub.com.br/isaias-saad/ruja-o-leao-que-se-abram-os-ceus-part-nivea-soares/" target="_blank">Isaías</a>
            <a href="https://www.cifraclub.com.br/fernandinho/yeshua/" target="_blank">Fernandinho</a>
        </div>
        </footer>
        </section>
        <section className={`${styles.question}`} onDoubleClick={() => {document.location.assign('https://www.cifraclub.com.br/louvor-iir/fogo-em-teus-olhos/')}}>
      <a>
        <p>Sala de Adoração - Julliany</p>
      <span className="status">19/03</span>
        </a>
        </section>
        <section className={`${styles.question}`}>
      <a>
        <p>Sala de Adoração - Fhop</p>
      <span className="status">19/03</span>
        </a>
      <footer>
        <div className={styles.userInfo}>
          <span>
          </span>
            <a href="https://www.cifraclub.com.br/clamor-pelas-nacoes/tu-nao-desistiras/" target="_blank">Tu não desistirás(A)</a>
            <a href="https://www.cifraclub.com.br/ministerio-nova-geracao/fogo-que-consome/" target="_blank">Fogo que consome(E)</a>
        </div>
        </footer>
        </section>

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
            />
          );
        })}
      </main>
    </>
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
