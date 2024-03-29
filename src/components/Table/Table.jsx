import "./Table.scss";
import { useState, useEffect, useContext } from "react";
import Post from "../../services/post.js";
import { WordlistContext } from "../App/WordlistContext.jsx";

export default function Table(props) {
  const { context, setContext } = useContext(WordlistContext);
  const [changeState, setChangeState] = useState(false);
  const [english, setEnglish] = useState("");
  const [russian, setRussian] = useState("");
  const [transcription, setTranscription] = useState("");
  const [tags, setTags] = useState("");
  const [validateEnglish, setValidateEnglish] = useState(false);
  const [validateRussian, setValidateRussian] = useState(false);
  const [validateTranscription, setValidateTranscription] = useState(false);
  const [validateTags, setValidateTags] = useState(false);

  useEffect(() => {
    setEnglish(props.english);
    setRussian(props.russian);
    setTranscription(props.transcription);
    setTags(props.tags);
  }, [changeState]);

  const handleChangeState = () => {
    setChangeState(!changeState);
  };

  function handleValidate() {
    if (!english && !russian && !transcription && !tags) {
      setValidateEnglish(true);
      setValidateRussian(true);
      setValidateTranscription(true);
      setValidateTags(true);
    }
  }

  function deleteWord(id) {
    console.log(id);
    const newWordList = context.filter((word) => word.id != id);
    setContext(newWordList);

    Post.deleteWordServer(id);
  }

  function saveEditedWord(id) {
    const newWord = {
      id: id,
      english: english,
      transcription: transcription,
      russian: russian,
      tags: tags,
    };
    const newContext = context.map((item) => {
      if (item.id === id) {
        return { ...item, ...newWord };
      }
      return item;
    });

    setContext([...newContext]);
    Post.updateWordServer(id, newWord);
    handleChangeState();
  }

  return (
    <div className="container__table">
      <div className="words-container__table">
        {changeState ? (
          <div className="words-container__change">
            <form className="words-container__inputs">
              <input
                type="text"
                required
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                className="cell__table-input"
                placeholder={props.english}
                name="english"
              ></input>
              <input
                type="text"
                required
                value={russian}
                onChange={(e) => setRussian(e.target.value)}
                className="cell__table-input"
                placeholder={props.russian}
                name="russian"
              ></input>
              <input
                type="text"
                required
                value={transcription}
                onChange={(e) => setTranscription(e.target.value)}
                className="cell__table-input"
                placeholder={props.transcription}
                name="transcription"
              ></input>
              <input
                type="text"
                required
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="cell__table-input"
                placeholder={props.tags}
                name="tags"
              ></input>
            </form>
            <div className="words-container__table">
              <div className="cell__table-validation">
                {!english && <span>*fill out</span>}
              </div>
              <div className="cell__table-validation">
                {!russian && <span>*fill out</span>}
              </div>
              <div className="cell__table-validation">
                {!transcription && <span>*fill out</span>}
              </div>
              <div className="cell__table-validation">
                {!tags && <span>*fill out</span>}
              </div>
            </div>
          </div>
        ) : (
          <div className="words-container__table">
            <div className="cell__table">{props.english}</div>
            <div className="cell__table">{props.russian}</div>
            <div className="cell__table">{props.transcription}</div>
            <div className="cell__table">{props.tags}</div>
          </div>
        )}
        {changeState ? (
          <div className="container__table-buttons">
            {!english || !russian || !transcription || !tags ? (
              <button
                className="save-button__table"
                type="button"
                disabled="disable"
              >
                save
              </button>
            ) : (
              <button
                className="save-button__table"
                type="button"
                onClick={() => saveEditedWord(props.id)}
              >
                save
              </button>
            )}
            <button
              className="cancel-button__table"
              onClick={handleChangeState}
            >
              cancel
            </button>{" "}
          </div>
        ) : (
          <button className="change-button__table" onClick={handleChangeState}>
            change
          </button>
        )}
        <button
          className="delete-button__table"
          onClick={() => deleteWord(props.id)}
        >
          del
        </button>
      </div>
    </div>
  );
}