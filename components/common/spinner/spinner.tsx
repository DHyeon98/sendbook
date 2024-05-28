import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import styles from "./spinner.module.css";

export default function Spinner() {
  return <FontAwesomeIcon className={styles.spinner} icon={faSpinner} />;
}
