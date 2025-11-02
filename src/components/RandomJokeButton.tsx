import { useState, type Dispatch, type SetStateAction } from "react";
import { getRandomJoke } from "../services/api";
import Loader from "./Loader";
import styles from "./RandomJokeButton.module.css";

interface Joke {
  question: string;
  answer: string;
}

interface RandomJokeButtonProps {
  setJoke: Dispatch<SetStateAction<Joke | null>>;
  setIsAnswerVisible: Dispatch<SetStateAction<boolean>>;
}

export default function RandomJokeButton({
  setJoke,
  setIsAnswerVisible,
}: RandomJokeButtonProps) {
  const [isPending, setIsPending] = useState<boolean>(false);
  const handleClick = async () => {
    try {
      setIsPending(true);
      const response = await getRandomJoke();
      setJoke(response.data);
      setIsAnswerVisible(false);
      setIsPending(false);
    } catch (error) {
      console.error(error);
      setIsPending(false);
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={styles.button}
    >
      {isPending ? <Loader /> : "Blague"}
    </button>
  );
}
