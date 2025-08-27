import Image from "next/image";
import type { HeroType } from "../types";
import Link from "next/link";
import { urlForImage } from "@sanity/lib/image";
import localFont from "next/font/local";

const lemonMilk = localFont({ src: "../fonts/LEMONMILK-Bold.otf" });

type Props = {
  hero: HeroType;
};

export default function SanityHero({
  hero: { title, lead, linkUrl, image },
}: Props) {
  return (
    <Link href={linkUrl}>
      {lead ? <div className="uppercase align-left">{lead}</div> : null}
      <div className="relative">
        <div className="relative w-full h-0 pb-100%">
          <Image
            src={urlForImage(image).width(800).fit("max").auto("format").url()}
            alt={image.alt || title}
            priority={true}
            className="z-0 object-center object-cover pointer-events-none"
            fill={true}
            key={image.asset._ref}
          />
        </div>
        <div className="absolute z-1 inset-y-50% text-white uppercase px-3 md:px-6 text-2xl md:text-4xl border-white hover:text-purple-400 hover:duration-300">
          <span className={lemonMilk.className}>{title}</span>
        </div>
      </div>
    </Link>
  );
}
