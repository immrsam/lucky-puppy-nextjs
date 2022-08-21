import { useState } from "react";
import { app, database } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function NoteOperations() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteDateTime, setNoteDateTime] = useState(Date.now());

  const dbInstance = collection(database, "notes");

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  const handleButtonClick = () => {
    let date = Date.now();

    setNoteDateTime(date);

    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteContent: noteContent,
      noteDateTime: noteDateTime,
    });
    inputToggle();
  };

  return (
    <>
      {isInputVisible ? (
        <div>
          <input
            placeholder="Enter the Title.."
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <input
            placeholder="Enter the content.."
            onChange={(e) => setNoteContent(e.target.value)}
          />
          <button onClick={handleButtonClick}>Save Update</button>
        </div>
      ) : (
        <div>
          <button onClick={inputToggle}>Puppy Update</button>
        </div>
      )}
    </>
  );
}
