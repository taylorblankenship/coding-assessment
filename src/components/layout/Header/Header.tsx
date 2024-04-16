import { Teko } from "next/font/google";
import Link from "next/link";

const teko = Teko({ subsets: ["latin"] }); //todo font

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/" className={teko.className}>
          <img src="/logo.png" alt="pokésearch logo" />
          <div>PokéSearch</div>
        </Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
