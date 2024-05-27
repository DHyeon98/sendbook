import styles from "./textBox.module.css";

export default function TextBox() {
  return (
    <div className={styles.textBox}>
      <p>
        <strong>SendBook</strong>에서
        <br />
        관심있는 책을 친구, 지인들과 나누세요.
      </p>
    </div>
  );
}
