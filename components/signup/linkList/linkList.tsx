import Link from "next/link";
import styles from "./linkList.module.css";

export default function LinkList() {
  return (
    <p className={styles.text}>
      이미 회원이신가요? <Link href="/">로그인 하기</Link>
    </p>
  );
}
