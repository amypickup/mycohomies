import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../fonts/PuffyHearts-Bold.otf" });

type Props = {
  title: string;
};

export default function PageBreak({ title }: Props) {
  return (
    <h2 className="mb-8">
      <span
        className={`${puffyHearts.className} text-3xl md:text-5xl text-pink-400`}
      >
        {title}
      </span>
    </h2>
  );
}
