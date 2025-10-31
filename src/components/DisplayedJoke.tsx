import styles from "./DisplayedJoke.module.css";

interface Joke {
  question: string;
  answer: string;
}

interface JokeProps {
  joke: Joke | null;
}

export default function DisplayedJoke({ joke }: JokeProps) {
  return (
    <div className={styles.container}>
      <p className={styles.question}>{joke?.question}</p>
      <p className={styles.answer}>Réponse : {joke?.answer}</p>
    </div>
  );
}
