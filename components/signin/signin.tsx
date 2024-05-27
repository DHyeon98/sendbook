import { Form } from "./form/context/form";
import LinkList from "./linkList/linkList";
import TextBox from "./textBox/textBox";
import styles from "./signin.module.css";

export default function SigninContainer() {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <TextBox />
        <Form>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="email">이메일</Form.Label>
            <Form.Email />
          </div>
          <div className={styles.formDiv}>
            <Form.Label htmlFor="password">비밀번호</Form.Label>
            <Form.Password />
          </div>
          <Form.Submit />
        </Form>
        <LinkList />
      </div>
    </article>
  );
}
