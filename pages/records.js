import GetRecords from "../lib/components/getRecords";
import NoteOperations from "../lib/components/NoteOperations";

export default function Records() {
  return (
    <div className="main">
      <h1>Records</h1>
      <NoteOperations />
      <GetRecords />
    </div>
  );
}
