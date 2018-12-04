import * as styles from "../styles/main.scss";
import { Layout } from "../components/Layout";

export default () => (
  <Layout title="HOME">
    <h1 className={styles.pageTitle}>Next.js example</h1>
    <ul className="list">
      <li>Typescript</li>
      <li>SCSS</li>
      <li>CSS Modules</li>
      <li>TSLint</li>
      <li>Prettier</li>
      <li>example</li>
    </ul>
  </Layout>
);
