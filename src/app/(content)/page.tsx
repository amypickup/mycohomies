import { getHeros } from "../../../sanity/lib/query";
import type { HeroType } from "../types";
import Image from "next/image";

export default async function Home() {
  const heros: HeroType[] = await getHeros();

  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 border-b border-zinc-800">
        <div className="italic p-2 md:p-5 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-400 to-green-400">
          mycohomies
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/background_mushrooms.jpg"}
          alt={"mushrooms on a park bench"}
          priority={true}
          className="w-full z-0 object-center object-cover pointer-events-none"
          layout="fill"
        />
        <div className="relative background-transparent z-1 py-40 px-0 md:px-32">
          <div className="max-w-xl mx-auto bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 border border-black p-3 md:p-8">
            <iframe
              src="https://mycohomies.substack.com/embed"
              height="320"
              className="border-black bg-white mx-auto w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
