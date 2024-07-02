import { instance } from "@/apis/naverBookApi";
import { auth } from "@/firebase/firebase";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  const init = async () => {
    // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인 여부를 확인하는 동안 기다림.
    await auth.authStateReady();
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url: string) => instance.get(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
