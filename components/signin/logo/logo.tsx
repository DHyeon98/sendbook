import Image from "next/image";
import styles from "./logo.module.css";

export default function LogoContainer() {
  return (
    <article className={styles.logoContainer}>
      <h1 className={styles.logo}>SendBook</h1>
      <div className={styles.logoBox}>
        <Image src={"/bookread.png"} alt="logo" fill />
      </div>
    </article>
  );
}
