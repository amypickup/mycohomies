"use client";

import Image from "next/image";
import Link from "next/link";
export interface CardProps {
  href: string;
  image: string | null;
  title: string;
  description?: string;
  author?: string;
}

export function Card(props: CardProps) {
  return (
    <article {...props}>
      <Link href={props.href} className="hover:opacity-60 flex gap-4 mb-4">
        <div className="overflow-hidden h-20 w-20">
          {props.image ? (
            <Image
              src={props.image}
              width={400}
              height={400}
              alt={props.title}
              className="h-full object-cover object-center"
            />
          ) : (
            <div className="border h-full border-pink-200 border-opacity-20"></div>
          )}
        </div>
        <section>
          <h3 className="mt-2 text-2xl font-semibold">{props.title}</h3>
          {props.description ? (
            <p className="text-sm font-light">{props.description}</p>
          ) : null}
          {props.author ? (
            <p className="text-sm font-light">{props.author}</p>
          ) : null}
        </section>
      </Link>
    </article>
  );
}
