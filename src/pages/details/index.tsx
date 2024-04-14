import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); //todo font

export default function Details() {
  return (
    <>
      <main className={`${inter.className}`}>
        test homepage body content here
      </main>
    </>
  );
}
