import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "../store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Food Receipt</title>
      </Head>
      <main
        className={`flex h-screen w-full items-center justify-center bg-blue-400 ${inter.className}`}
      >
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
