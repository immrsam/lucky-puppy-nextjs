import { GetTransitionGallery } from "../lib/components/ImageOperations";

export default function About() {
  return (
    <section className="main">
      <h1>About</h1>
      <div className="grid-container">
        <div className="about">
          <h3>Greetings</h3>
          <p>This is a work in progress site.</p>
          <p>
            The idea is for it to become a social media revolving around people
            and their 4 legged friends.
          </p>
          <p>
            Being able to share Photos and updates about their favourite doggo
            and also any good spots to take them.
          </p>
          <p>
            People will be able to add other people to keep up to date with
            their good boy or girl and also see what recomendations they make
            for parks, walks or any other spots that might be good.
          </p>
          <p>
            If you look up the top, there is a wealth of doggy fun facts to get
            lost in, just hit the <i>Load new fact</i> button to load a new one.
          </p>
          <p>In future I hope to add the following</p>
          <ul>
            <li>Account management</li>
            <li>Upload photos/videos within the app</li>
            <li>Create updates with date, time and location sharing</li>
            <li>Share and rate spots for dogs</li>
          </ul>
          <h3>Enjoy</h3>
        </div>
        <div className="gallery">
          <GetTransitionGallery />
        </div>
      </div>
    </section>
  );
}
