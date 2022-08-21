import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "./firebaseConfig";

export default function GetRecords() {
  const dbInstanceRecords = collection(database, "notes");

  const [recordsArray, setRecordsArray] = useState([]);

  const getRecordsArray = () => {
    getDocs(dbInstanceRecords).then((data) => {
      console.log(`array is ` + data.docs.length);
      setRecordsArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getRecordsArray();
  }, []);

  recordsArray.sort((a, b) => {
    a.noteDateTime - b.noteDateTime;
  });

  return (
    <div>
      <h3>Records</h3>
      <div>
        {recordsArray.map((note) => {
          return (
            <div>
              <span>
                {note.noteTitle} {note.noteContent} {note.noteDateTime}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
