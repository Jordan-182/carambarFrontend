import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.globalHeader}>
      <h2 className={styles.title}>Carambar</h2>
    </header>
  );
}
