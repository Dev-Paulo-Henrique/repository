import { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { parseCookies } from "nookies";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import Modal from "react-modal";
import { database } from "../../../services/firebase";
import useRoom from "../../../hooks/useRoom";
import Question from "../../../components/Question";
import RoomCode from "../../../components/RoomCode";
import Button from "../../../components/Button";
import logoSVG from "../../../assets/images/logo.svg";
import styles from "../../../assets/styles/pages/Room.module.scss";
import useAuth from "../../../hooks/useAuth";

type RoomQueryParams = {
  id?: string;
};

export default function AdminRoom() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();
  const { id: roomId }: RoomQueryParams = router.query;
  const { title, questions } = useRoom(roomId);
  console.log(title, questions)

  async function send(){
    Router.push(`/rooms/-MxAVG-JyrLMdw1xfUZF`);
    console.log(title, questions)
  }

  return (
    <>
      <Head>
        <title>Administrador</title>
      </Head>

      <header className={styles.header}>
        <div>
          <Image src={logoSVG} alt="Letmeask" />
          <div>
            <RoomCode />
            <Button type="button" disabled={!user} onClick={send}>
              Enviar sugestão
            </Button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div>
          <h1>Administrador</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{" "}
              {questions.length > 1 ? "sugestões" : "sugestão"}
            </span>
          )}
        </div>

        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              id={question.id}
              content={question.content}
              author={question.author}
              isAdmin
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
    </>
  );
}

type FirebaseRoom = {
  authorId: string;
  questions: {};
  title: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id: roomId } = ctx?.query;
  const { ["letmeask.userId"]: userId } = parseCookies(ctx);

  const roomRef = await database.ref(`rooms/${roomId}`).get();
  const firebaseRoom: FirebaseRoom = roomRef.val();

  const { authorId: adminId } = firebaseRoom;

  if (adminId !== userId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};