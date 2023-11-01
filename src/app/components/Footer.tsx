import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-0">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-left md:items-center md:justify-between justify-center gap-y-4 md:px-3 px-3 py-3 md:py-16 text-zinc-400">
        <ul className="text-md">
          <li>
            <Link
              href="https://www.buymeacoffee.com/pickup"
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 hover:from-blue-400 hover:to-violet-600"
            >
              Buy me a (mushroom) coffee
            </Link>{" "}
            ☕
          </li>
          <li>
            <Link href="/studio/desk">Sanity Studio</Link>
          </li>
        </ul>
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>
        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/amypickup/woodwide"
            target="_blank"
            rel="noreferrer noopener"
          >
            By <span className="">Amy Pickup</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
