const API_URL = import.meta.env.VITE_API_URL;

export async function getRandomJoke() {
  const res = await fetch(`${API_URL}/blagues/random`);
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
}
