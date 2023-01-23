import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { useRouter } from 'next/router'

import "../assets/styles/global.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router, router.pathname)
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster position="top-right" />
      {router.asPath !== "/rooms/app/-MxAVG-JyrLMdw1xfUZF" && <DarkModeSwitch />}
    </AuthProvider>
  );
}

export default MyApp;
