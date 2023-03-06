import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-4 py-8 h-20 w-full flex justify-between items-center">
      <Link href={"/"}>
        <img className="w-36 md:w-48" src="/logo.png" alt="" />
      </Link>
      <ul className="flex gap-10">
        <li>
          <a className=" font-semibold" href="http://www.github/rakeshsangem">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
