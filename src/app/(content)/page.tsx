import { getHeros } from "../../../sanity/lib/query";
import type { HeroType } from "../types";
import SanityHero from "../components/SanityHero";
import PageBreak from "../components/PageBreak";

export default async function Home() {
  const heros: HeroType[] = await getHeros();

  return (
    <div className="text-center max-w-8xl px-6 md:px-8 lg:px-12 py-6">
      <section>
        <PageBreak title="mushroom projects" />
        <div className="grid grid-rows-1 md:grid-cols-2 gap-4 my-9">
          {heros.map((hero) => (
            <SanityHero hero={hero} key={hero._id} />
          ))}
        </div>
      </section>
    </div>
  );
}
