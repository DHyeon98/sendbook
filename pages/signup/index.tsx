import styles from "../index.module.css";
import LogoContainer from "@/components/signin/logo/logo";
import Signup from "@/components/signup/signup";

export default function SignupPage() {
  return (
    <main className={styles.main}>
      <LogoContainer />
      <Signup />
    </main>
  );
}
