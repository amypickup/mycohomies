import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-2 px-6 border-b border-zinc-800 z-30 md:mb-12 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 hover:from-blue-400 hover:to-violet-600 duration-300"
        >
          mycohomies
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li className="text-lg italic text-bold"></li>
            <li>
              <Link href="/shop" className="hover:text-slate-400 duration-300">
                shop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
