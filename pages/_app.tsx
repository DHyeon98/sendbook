import { auth } from "@/firebase/firebase";
import usePullReload from "@/hook/usePullReload";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const pullDownDistance = usePullReload();

  const init = async () => {
    // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인 여부를 확인하는 동안 기다림.
    await auth.authStateReady();
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div
        style={{
          height: `${pullDownDistance}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        새로고침
      </div>
      <Component {...pageProps} />
    </>
  );
}
