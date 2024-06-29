import { Form } from "../common/form/context/form";
import LinkList from "./linkList/linkList";
import TextBox from "./textBox/textBox";
import styles from "./signin.module.css";
import { useEffect, useState } from "react";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { deleteCookie, setCookie } from "cookies-next";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const methods = useForm<FieldValues>();
  const { watch } = methods;
  const emailValue = watch("email");
  const pwValue = watch("password");

  const submitFunc = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        emailValue,
        pwValue
      );
      const user = response.user;
      const token = await user.getIdToken();
      setCookie("token", token, { maxAge: 60 * 60 * 24 });
    } catch (error) {
      if (error instanceof FirebaseError) {
        // 에러 체킹
        console.log(error.code, error.message);
      }
    }
  };
  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인된 상태
        console.log("User is signed in:", user);
      } else {
        // 사용자가 로그아웃된 상태
        console.log("User is signed out");
      }
    });
  };
  const logOut = () => {
    auth.signOut();
    deleteCookie("token");
  };
  useEffect(() => {
    checkAuthState();
  }, []);
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <TextBox />
        <Form submitFunc={submitFunc} methods={methods}>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="email">이메일</Form.Label>
            <Form.Email />
          </div>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="password">비밀번호</Form.Label>
            <Form.Password />
          </div>
          <Form.Submit isLoading={loading}>로그인</Form.Submit>
        </Form>
        <LinkList />
      </div>
      <button type="button" onClick={logOut}>
        로그아웃
      </button>
    </article>
  );
}
