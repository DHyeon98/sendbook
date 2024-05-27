import { Form } from "../common/form/context/form";
import styles from "../signin/signin.module.css";
import TextBox from "./textBox/textBox";
import LinkList from "./linkList/linkList";

export default function Signup() {
  const submitFunc = (data: any) => {
    console.log(data);
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
          <Form.Submit>회원가입</Form.Submit>
        </Form>
        <LinkList />
      </div>
    </article>
  );
}
