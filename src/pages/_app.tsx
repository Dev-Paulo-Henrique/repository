import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";
import DarkModeSwitch from "../components/DarkModeSwitch";

import "../assets/styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster position="top-right" />
      {window.location.href !== "https://repository-neon.vercel.app/rooms/app/-MxAVG-JyrLMdw1xfUZF" && <DarkModeSwitch />}
    </AuthProvider>
  );
}

export default MyApp;
