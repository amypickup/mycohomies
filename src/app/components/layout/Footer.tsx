import Link from "next/link";
import Logo from "@components/ui/Logo";
import Rainbow from "@components/ui/rainbow/Rainbow";

export default function Footer() {
  return (
    <footer className="border-t border-pink-200 border-opacity-20 mt-0 text-md">
      <div className="max-w-7xl px-6 md:px-8 lg:px-12 mx-auto py-3 md:py-16">
        <div className="mb-8 text-5xl">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex gap-8 md:flex-row flex-col items-left md:items-start md:justify-start justify-center mb-8">
          <iframe
            src="https://mycohomies.substack.com/embed"
            height="200"
            className="w-full max-w-lg rounded-3xl text-left border border-pink-200"
          ></iframe>
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="https://www.buymeacoffee.com/pickup">
                  <Rainbow>Buy me a (mushroom) coffee</Rainbow>
                </Link>{" "}
                ☕
              </li>
              <li>
                <Link href="/studio/desk">Sanity Studio</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-right">
          <div className="hover:text-black duration-200 font-light">
            &copy; {new Date().getFullYear()} Amy Pickup. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
