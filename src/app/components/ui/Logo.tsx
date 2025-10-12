import localFont from "next/font/local";

const puffyHearts = localFont({ src: "../../fonts/PuffyHearts-Bold.otf" });

export default function Logo() {
  return (
    <span
      className={`${puffyHearts.className} font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-amber-300 hover:from-violet-600 hover:via-sky-400 hover:to-teal-400`}
    >
      Mycohomies
    </span>
  );
}
