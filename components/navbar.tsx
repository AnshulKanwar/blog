import Link from "next/link";
import Logo from "./logo";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-10">
      <div className="flex gap-10 items-center">
        <a href="https://www.anshulkanwar.tech" className="w-20 cursor-pointer">
          <Logo />
        </a>
        <h1 className="text-xl font-bold cursor-pointer">
          <a className="hover:underline" href="https://www.anshulkanwar.tech">Anshul Kanwar&#39;s </a>
          <span className="hover:underline"><Link href="/">Blog</Link></span>
        </h1>
      </div>
      <div className="flex gap-20 items-center text-neutral-300 dark:text-neutral-700">
        <span className="transition hover:text-black dark:hover:text-white">
          <ThemeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
