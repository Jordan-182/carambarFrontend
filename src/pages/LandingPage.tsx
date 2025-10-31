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
  return (
    <>
      <h1 className={styles.title}>Obtenir une blague aléatoire</h1>
      <RandomJokeButton setJoke={setJoke} />
      <DisplayedJoke joke={joke} />
    </>
  );
}
