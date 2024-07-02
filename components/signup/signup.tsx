import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "../common/form/context/form";
import TextBox from "./textBox/textBox";
import LinkList from "./linkList/linkList";
import Spinner from "../common/spinner/spinner";
import styles from "../signin/signin.module.css";
import { useForm } from "react-hook-form";
import { signUpApi } from "@/apis/firebaseApi";
import { SignUpType } from "@/types/signup";

export default function Signup() {
  const router = useRouter();
  const methods = useForm();
  const { getValues } = methods;
  const [loading, setLoading] = useState(false);
  const submitFunc = async (data: SignUpType) => {
    try {
      await signUpApi(data);
      router.replace("/bookmark");
      setLoading(true);
    } catch {
      console.log("에러");
    } finally {
      setLoading(false);
    }
  };
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <TextBox />
        <Form methods={methods} submitFunc={submitFunc}>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="username">닉네임</Form.Label>
            <Form.Username />
          </div>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="email">이메일</Form.Label>
            <Form.Email />
          </div>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="password">비밀번호</Form.Label>
            <Form.Password />
          </div>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="passwordConfirm">비밀번호 확인</Form.Label>
            <Form.PasswordConfirm passwordValue={getValues("password")} />
          </div>
          <Form.Submit isLoading={loading}>
            {loading ? <Spinner /> : "회원가입"}
          </Form.Submit>
        </Form>
        <LinkList />
      </div>
    </article>
  );
}
