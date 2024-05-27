import LogoContainer from "@/components/signin/logo/logo";
import SigninContainer from "@/components/signin/signin";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LogoContainer />
      <SigninContainer />
    </main>
  );
}
