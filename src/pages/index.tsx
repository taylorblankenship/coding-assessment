import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); //todo font

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      test homepage body content here
    </main>
  );
  2;
}
