import { useState, useEffect } from "react";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

function MakeRecord() {
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

function GetRecords() {
  const dbInstanceRecords = collection(database, "notes");
  const [recordsArray, setRecordsArray] = useState([]);

  useEffect(() => {
    getDocs(dbInstanceRecords).then((data) => {
      setRecordsArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, []);

  return (
    <div>
      <h3>Records</h3>
      <div>
        {recordsArray.map((note) => {
          return (
            <div key={note.id}>
              <span>
                {note.noteTitle} {note.noteContent} {note.noteDateTime}{" "}
                {note.id}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { MakeRecord, GetRecords };
