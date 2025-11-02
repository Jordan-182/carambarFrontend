import { type Dispatch, type SetStateAction } from "react";
import styles from "./DisplayedJoke.module.css";

interface Joke {
  question: string;
  answer: string;
}

interface JokeProps {
  joke: Joke | null;
  isAnswerVisible: boolean;
  setIsAnswerVisible: Dispatch<SetStateAction<boolean>>;
}

export default function DisplayedJoke({
  joke,
  isAnswerVisible,
  setIsAnswerVisible,
}: JokeProps) {
  const handleClick = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  if (!joke) {
    return null;
  }

  return (
    <div className={styles.container}>
      <p className={styles.question}>{joke.question}</p>
      {isAnswerVisible ? (
        <p className={styles.answer}>Réponse : {joke.answer}</p>
      ) : (
        <button onClick={handleClick} className={styles.answerButton}>
          Voir la réponse
        </button>
      )}
    </div>
  );
}
