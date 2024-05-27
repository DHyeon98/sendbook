import LogoContainer from "@/components/signin/logo/logo";
import Signin from "@/components/signin/signin";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LogoContainer />
      <Signin />
    </main>
  );
}
