import Gallery from "@/components/homepage_gallery/Gallery/Gallery";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); //todo font

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        <Gallery />
      </main>
    </>
  );
}
