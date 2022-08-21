// import "../styles/globals.css";
import "../styles/style.css";
import Link from "next/link";
import Facts from "../lib/components/fact";
import Heading from "../lib/components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <div className="left-wrap">
        <aside className="menu">
          <Heading />
          <div>
            <nav>
              <Link href="/">
                <a>
                  H<span className="text">ome</span>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  A<span className="text">bout</span>
                </a>
              </Link>
              <Link href="/records">
                <a>
                  R<span className="text">ecords</span>
                </a>
              </Link>
              <Link href="/gallery">
                <a>
                  G<span className="text">allery</span>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  C<span className="text">ontact</span>
                </a>
              </Link>
            </nav>
          </div>
        </aside>
      </div>
      <div className="right-wrap">
        <header>
          <Facts />
        </header>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
