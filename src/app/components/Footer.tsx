import Link from "next/link";
import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../fonts//PuffyHearts-Bold.otf" });
const lemonMilkLight = localFont({ src: "../fonts/LEMONMILK-Light.otf" });
const lemonMilkMedium = localFont({ src: "../fonts/LEMONMILK-Medium.otf" });

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-0 text-md">
      <div className="max-w-7xl mx-auto px-3 py-3 md:py-16 text-zinc-400">
        <div className="mb-8">
          <span
            className={`text-transparent ${puffyHearts.className} text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 hover:from-blue-400 hover:to-violet-600 duration-300`}
          >
            MYCOHOMIES
          </span>
        </div>
        <div className="flex md:flex-row flex-col items-left md:items-center md:justify-between justify-center">
          <div className="mb-8">
            <div className="uppercase font-bold mb-4">Social</div>
            <ul className="flex flex-col gap-3">
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
          </div>
          <div className="mb-8">
            <div className="uppercase font-bold mb-4">Projects</div>
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
            </ul>
          </div>

          <div className="items-right">
            <div className="hover:text-black duration-200">
              &copy; {new Date().getFullYear()} Amy Pickup. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
