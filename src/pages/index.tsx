import Gallery from "@/components/Gallery/Gallery";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); //todo font

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        test homepage body content here
        <Gallery />
      </main>
    </>
  );
}
