import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Router from 'next/router';

import "../assets/styles/global.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster position="top-right" />
      {router.pathname !== "/rooms/app/-MxAVG-JyrLMdw1xfUZF" && <DarkModeSwitch />}
    </AuthProvider>
  );
}

export default MyApp;
