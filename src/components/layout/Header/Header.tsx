import { Teko } from "next/font/google";
import Link from "next/link";

const teko = Teko({ subsets: ["latin"] });

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/" className={teko.className}>
          <img src="/logo.png" alt="pokésearch logo" />
          <h1>PokéSearch</h1>
        </Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
