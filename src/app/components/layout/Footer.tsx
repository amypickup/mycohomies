import Link from "next/link";
import Logo from "@components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-pink-200 dark:border-violet-600 border-opacity-20 mt-0 text-md">
      <div className="max-w-7xl px-6 md:px-8 lg:px-12 mx-auto py-3 md:py-16 text-black dark:text-white">
        <div className="mb-8 text-5xl">
          <Logo />
        </div>
        <div className="flex gap-8 md:flex-row flex-col items-left md:items-start md:justify-start justify-center mb-8">
          <iframe
            src="https://mycohomies.substack.com/embed"
            height="200"
            className="w-full max-w-lg rounded-3xl text-left border border-pink-200 dark:border-violet-600"
          ></iframe>
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="https://woodwide.vercel.app/" className="">
                  AI-Generated Mushroom Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mycohomies-subscription-box-pre-order"
                  className=""
                >
                  Mycohomies Subscription Box
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.buymeacoffee.com/pickup"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-amber-300 hover:from-violet-600 hover:via-blue-400 hover:to-green-400 dark:from-violet-600 dark:via-blue-400 dark:to-green-400 dark:hover:from-pink-400 dark:hover:via-orange-400 dark:hover:to-amber-300"
                >
                  Buy me a (mushroom) coffee
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
