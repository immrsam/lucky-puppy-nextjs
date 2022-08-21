import { MakeRecord, GetLatestRecord } from "../lib/components/NoteOperations";
import { GetImages } from "../lib/components/ImageOperations";

export default function Home() {
  return (
    <section className="main">
      <h1>Lucky The Puppy</h1>
      <MakeRecord />

      <GetLatestRecord />
      <h1>Latest pics</h1>
      <GetImages />
    </section>
  );
}
