import styles from "./textBox.module.css";

export default function TextBox() {
  return (
    <div className={styles.textBox}>
      <p>
        Welcome to <strong>SendBook</strong>!
        <br />
        SendBook에 오신걸 환영합니다.
      </p>
    </div>
  );
}
