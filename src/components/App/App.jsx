import '../../style/normalize.css';
import './App.scss';
import Header from '../Header/Header.jsx';
import Inputs from '../Inputs/Inputs.jsx';
import Wordlist from '../Wordlist/Wordlist.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import NoMatch from '../NoMatch/NoMatch.jsx';
import { useState } from 'react';
import wordlistJson from '../Card/wordlist.json';
import {  BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {

  const [wordlist, setWordlist] = useState(wordlistJson);

  function deleteWord(id) {
    const newWordList = wordlist.filter(word => word.id != id)
    setWordlist(newWordList)
  }

  function addNewWord(english, translation, transcription, tags) {
    const newWord = {        
      english: english,
      transcription: transcription,
      translation: translation,
      tags: tags
    }
    
    const newWordList = [...wordlist, newWord];
    setWordlist(newWordList)
  }

  function saveEditedWord(english, translation, trasctiption, tags, id) {
    const editedWordList = wordlist.map(word => {
      if (word.id === id) {
        word.english = english;
        word.transcription = trasctiption;
        word.translation = translation;
        word.tags = tags
        return word
      }
      return word
    })
    setWordlist(editedWordList)
  }

  return (
    <Router>
    <div className="container__app">
      <Header/>
      <Routes>
          <Route path="/" element={<Main wordlist={wordlist} setWordlist={setWordlist}/>} />
          <Route path="/add" element={<Inputs addNewWord={addNewWord} wordlist={wordlist} setWordlist={setWordlist}/>} />
          <Route path="/wordlist" element={<Wordlist saveEditedWord={saveEditedWord} deleteWord={deleteWord} wordlist={wordlist} setWordlist={setWordlist} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App

