import { useState, useEffect, createContext } from "react";
import Loader from "../Loader/Loader";
export const WordlistContext = createContext();

export function WordlistContextComponent({ children }) {
  const [context, setContext] = useState(false);
  const value = { context, setContext };

  useEffect(() => {
    getWordlist();
  }, []);

  async function getWordlist() {
    try {
      const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const arrWords = await resp.json();
      setContext(arrWords);
    } catch (e) {
      console.log("ошибка");
    }
  }

  if (!context) return <Loader/>;

  return (
    <WordlistContext.Provider value={value}>
      {children}
    </WordlistContext.Provider>
  );
}