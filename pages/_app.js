// import "../styles/globals.css";
import "../styles/style.css";
import Link from "next/link";
import Facts from "../lib/components/fact";
import Heading from "../lib/components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <header>
        <Heading />
        <Facts />
      </header>
      <aside className="display-border aside aside-1">
        <div>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/records">
              <a>Records</a>
            </Link>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>

            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </div>
      </aside>
      <Component {...pageProps} />

      <footer className="display-border footer">Footer</footer>
    </div>
  );
}

export default MyApp;
