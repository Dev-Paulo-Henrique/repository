import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import CopySVG from "../assets/images/copy.svg";
import styles from "../assets/styles/components/RoomCode.module.scss";

export default function RoomCode() {
  const [copied, setCopied] = useState(false);

  async function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText("thiagobatistadsilva87@gmail.com");
    setCopied(true);

    toast.success("Copiado para o clipboard!", {
      style: {
        background: "#97c4f8",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#a0cafa"
      },
      icon: "📎"
    });
  }

  return (
    <>
      <button className={`${styles.roomCode} ${copied ? styles.copied : ""}`} onClick={copyRoomCodeToClipboard}>
        <div>
          <Image src={CopySVG} alt="Copiar código da sala" />
        </div>
        <span>PIX</span>
      </button>
    </>
  );
}
