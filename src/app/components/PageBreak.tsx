import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../fonts/PuffyHearts-Bold.otf" });

type Props = {
  title: string;
};

export default function PageBreak({ title }: Props) {
  return (
    <h2 className="mb-8">
      <span
        className={`text-transparent uppercase ${puffyHearts.className} text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300`}
      >
        {title}
      </span>
    </h2>
  );
}
