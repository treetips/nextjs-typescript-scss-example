import cowsay from "cowsay-browser";
import { Layout } from "../../components/Layout";

export default () => (
  <Layout title="COWSAY !!">
    <pre>{cowsay.say({ text: "cowsay !!" })}</pre>
  </Layout>
);
