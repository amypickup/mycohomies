import NewsletterSubscribe from "../components/NewsletterSubscribe";
import SquareHero from "../components/SquareHero";
import { getHeros } from "../../../sanity/lib/query";
import type { HeroType } from "../types";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";

export default async function Home() {
  const heros: HeroType[] = await getHeros();

  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 border-b border-zinc-800">
        <div className="italic p-3 md:p-5 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-400 to-green-400">
          mycohomies
        </div>
      </div>
      <div className="">
        <Image
          src={"/background_mushrooms.jpg"}
          width={800}
          height={200}
          alt={"mushrooms on a park bench"}
          priority={true}
          className="w-full"
        />
        <div className="relative bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 border-t border-zinc-800">
          <NewsletterSubscribe />
        </div>
      </div>
    </div>
  );
}
