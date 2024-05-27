import Link from "next/link";
import styles from "./linkList.module.css";

export default function LinkList() {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/signup">회원가입</Link>
      </li>
      <li>
        <Link href="/find">비밀번호 찾기</Link>
      </li>
    </ul>
  );
}
