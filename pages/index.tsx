import LogoContainer from "@/components/signin/logo/logo";
import SigninForm from "@/components/signin/form/form";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LogoContainer />
      <article className={styles.formContainer}>
        <SigninForm />
      </article>
    </main>
  );
}
