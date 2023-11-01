import Image from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  title: string;
  lead: string;
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
};

export default function SquareHero({
  title,
  lead,
  linkUrl,
  imageUrl,
  imageAlt,
}: Props) {
  return (
    <div className="mx-0 md:mx-auto">
      <div className="uppercase align-left mx-3">{title}</div>
      <a href={linkUrl}>Read more...</a>
      {lead ? <div className="uppercase align-left">{lead}</div> : null}
      <div className="">
        <Image
          src={imageUrl}
          width={800}
          height={800}
          alt={imageAlt || title}
          priority={true}
        />
      </div>
    </div>
  );
}
