import "../styles/main.scss";
import * as styles from "../styles/main.scss";
import Link from "next/link";
import Head from "next/head";

export const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

    <header className={styles.header}>
      <div>
        <img src="/static/images/nextjs-logo.png" className={styles.logo} />
      </div>
    </header>

    <article className={styles.container}>{props.children}</article>

    <footer>
      <hr />
      <nav className={styles.footer}>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp;
        <Link href="/cowsay/">
          <a>cowsay</a>
        </Link>
      </nav>
    </footer>
  </div>
);
