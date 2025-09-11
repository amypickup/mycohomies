import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../fonts/PuffyHearts-Bold.otf" });

type Props = {
  title: string;
};

export default function PageBreak({ title }: Props) {
  return (
    <h2 className="mb-8">
      <span
        className={`text-transparent ${puffyHearts.className} text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-amber-300 hover:from-violet-600 hover:via-blue-400 hover:to-green-400 dark:from-violet-600 dark:via-blue-400 dark:to-green-400 dark:hover:from-pink-400 dark:hover:via-orange-400 dark:hover:to-amber-300`}
      >
        {title}
      </span>
    </h2>
  );
}
