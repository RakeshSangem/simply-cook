import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex h-20 w-full  items-center border-b border-gray-200">
      <div className="container mx-auto flex max-w-6xl items-center justify-between">
        <Link href={"/"}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img className="w-36 md:w-48" src="/logo.png" alt="" />
        </Link>
        <ul className="">
          <li>
            <a
              className=" font-semibold"
              href="http://www.github.com/rakeshsangem/simply-cook"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
