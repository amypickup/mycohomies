"use client";

import React from "react";
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
      <Link href={props.href} className={"hover:opacity-60"}>
        <div className="overflow-hidden bg-gray-200 rounded-3xl">
          {props.image ? (
            <Image
              src={props.image}
              width={400}
              height={400}
              alt={props.title}
              className="h-full w-full object-cover object-center"
            />
          ) : null}
        </div>
        <section>
          <h3 className="mt-2 text-lg font-semibold">{props.title}</h3>
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
