import { useState } from "react";
import DisplayedJoke from "../components/DisplayedJoke";
import RandomJokeButton from "../components/RandomJokeButton";
import styles from "./LandingPage.module.css";

export interface Joke {
  question: string;
  answer: string;
}

export default function LandingPage() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  return (
    <>
      <h1 className={styles.title}>Blagues Carambar</h1>
      <h2 className={styles.subtitle}>
        Cliquez sur le bouton ci-dessous pour obtenir aléatoirement une des
        légendaires blagues Carambar!
      </h2>
      <RandomJokeButton
        setJoke={setJoke}
        setIsAnswerVisible={setIsAnswerVisible}
      />
      <DisplayedJoke
        joke={joke}
        setIsAnswerVisible={setIsAnswerVisible}
        isAnswerVisible={isAnswerVisible}
      />
    </>
  );
}
