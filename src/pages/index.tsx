import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import logoSVG from "../assets/images/logo.svg";
import googleIconSVG from "../assets/images/google-icon.svg";
import styles from "../assets/styles/pages/Home.module.scss";

export default function Home() {
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    toast.success("Logado com sucesso!", {
      style: {
        background: "#68D391",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391"
      }
    });

    Router.push(`admin/rooms/-MxAVG-JyrLMdw1xfUZF`);

  }

  return (
    <div className={styles.pageAuth}>
      <Head>
        <title>Letmeask</title>
      </Head>

      <main className={styles.content}>
        <div>
          <Image src={logoSVG} alt="Letmeask" />
          <button
            type="button"
            className={styles.googleButton}
            onClick={handleCreateRoom}
          >
            <Image src={googleIconSVG} alt="Logo do Google" />
            Entrar com o Google
          </button>
        </div>
      </main>
    </div>
  );
}