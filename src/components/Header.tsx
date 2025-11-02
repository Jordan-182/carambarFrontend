import carambarLogo from "../assets/carambarLogo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.globalHeader}>
      <img src={carambarLogo} alt="Logo Carambar" className={styles.logo} />
    </header>
  );
}
