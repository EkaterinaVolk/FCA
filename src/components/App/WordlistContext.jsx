import { useState, useEffect, createContext } from "react";
import Loader from "../Loader/Loader";
import Get from "../../services/get";
export const WordlistContext = createContext();

export function WordlistContextComponent({ children }) {
  const [context, setContext] = useState(false);
  const value = { context, setContext };

  useEffect(() => {
    getWordlistServer();
  }, []);

  async function getWordlistServer() {
    const WordlistServer = await Get.getWordlist();
    setContext(WordlistServer);
  }

  if (!context) return <Loader />;

  return (
    <WordlistContext.Provider value={value}>
      {children}
    </WordlistContext.Provider>
  );
}
