import Head from "next/head";

import styles from "../styles/index.module.css";

import testwords from "../../data/testwords.json";

export default function Main() {
  const correctWord = testwords[Math.floor(Math.random() * testwords.length)];
  console.log(`correct word to test: ${correctWord}`);

  return (
    <div className={styles.container}>
      <Head>
        <title>Generic project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Generic Project</h1>
        <p>
          This component is just a placeholder and should be replaced with your
          application
        </p>
      </main>

      <footer>A 312 project</footer>
    </div>
  );
}
