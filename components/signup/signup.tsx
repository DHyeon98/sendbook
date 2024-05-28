import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "../common/form/context/form";
import TextBox from "./textBox/textBox";
import LinkList from "./linkList/linkList";
import Spinner from "../common/spinner/spinner";
import styles from "../signin/signin.module.css";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const submitFunc = async (data: any) => {
    console.log(data);
    try {
      setLoading(true);
      // email과 password를 사용해 계정 생성
      // 첫 번째 인자 : 인증 인스턴스, 두 번째 인자 : 이메일, 세 번째 인자: 패스워드
      // 성공 시 즉시 로그인, 실패할 경우는 계정이 이미 존재하거나 패스워드가 유효하지 않은 경우.
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(credentials.user);
      // 첫 번째 인자 : 업데이트 할 프로필, 두 번째 인자 : 닉네임 값 or 이미지 url
      await updateProfile(credentials.user, {
        displayName: data.username,
      });
      router.replace("/bookmark");
    } catch {
      console.log("이메일이 중복되었습니다.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <TextBox />
        <Form submitFunc={submitFunc}>
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
            <Form.PasswordConfirm />
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
