import Gallery from "@/components/homepageGallery/Gallery/Gallery";
import { Arimo } from "next/font/google";
import Head from "next/head";

const arimo = Arimo({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéSearch</title>
      </Head>
      <main className={`${arimo.className}`}>
        <Gallery />
      </main>
    </>
  );
}
