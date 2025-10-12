import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../fonts/PuffyHearts-Bold.otf" });

type Props = {
  title: string;
};

export default function PageBreak({ title }: Props) {
  return (
    <h2 className="mb-8">
      <span
        className={`text-transparent ${puffyHearts.className} text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-amber-300 hover:from-violet-600 hover:via-sky-400 hover:to-teal-400`}
      >
        {title}
      </span>
    </h2>
  );
}
