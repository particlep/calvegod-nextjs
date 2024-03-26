import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CalveGod.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="T-Bone, the ladies are gonna love you!" />
        <p className="description">Hot calve pics coming soon!</p>
      </main>

      <Footer />
    </div>
  );
}
