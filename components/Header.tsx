import Image from "next/image";
import Link from "next/link";
import { ThemeTogler } from "./ThemeTogler";

function Header() {
  return (
    <header className="fixed">
        <Link href="/">
        <Image alt="Disney logo"
            src="https://links.papareact.com/a943ae" 
            width={120}
            height={100}
            className="cursor-pointer dark:invert"
        />
        </Link>
        <div className="fixed flex w-full items-center justify-center z-20 top-0 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to gray-900">
            {/*Genre Dropdown */}
            {/*Search Input */}
            <ThemeTogler />
        </div>
    </header>
  )
}

export default Header
