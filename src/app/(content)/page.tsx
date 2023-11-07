import { getHeros } from "../../../sanity/lib/query";
import type { HeroType } from "../types";
import SanityHero from "../components/SanityHero";
import PageBreak from "../components/PageBreak";
import Image from "next/image";
import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../fonts/PuffyHearts-Bold.otf" });

export default async function Home() {
  const heros: HeroType[] = await getHeros();

  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-300">
        <div className="uppercase p-2 md:p-5 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-400 to-green-400">
          <span className={puffyHearts.className}>Mycohomies</span>
        </div>
      </div>
      <section>
        <div className="relative mb-9">
          <Image
            src={"/background_mushrooms_2.jpeg"}
            alt={"mushrooms on a park bench"}
            priority={true}
            className="w-full z-0 object-center object-cover pointer-events-none"
            fill={true}
          />
          <div className="relative background-transparent z-1 py-52 px-0 md:px-16"></div>
        </div>
      </section>
      <section>
        <PageBreak title="Mushroom Projects" />
        <div className="grid grid-rows-1 md:grid-cols-2 gap-4 my-9">
          {heros.map((hero) => (
            <SanityHero hero={hero} key={hero._id} />
          ))}
        </div>
      </section>
      <section>
        <PageBreak title="Newsletter" />
        <div className="relative">
          <Image
            src={"/background_mushrooms.jpg"}
            alt={"mushrooms on a park bench"}
            priority={true}
            className="w-full z-0 object-center object-cover pointer-events-none"
            fill={true}
          />
          <div className="relative background-transparent z-1 py-48 px-0 md:px-32">
            <div className="max-w-xl mx-auto bg-gradient-to-r from-red-400 via-orange-400 to-pink-300 border border-black p-3 md:p-8">
              <iframe
                src="https://mycohomies.substack.com/embed"
                height="320"
                className="border-black bg-white mx-auto w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
