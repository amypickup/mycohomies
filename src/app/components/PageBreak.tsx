import localFont from "next/font/local";
import Rainbow from "./ui/rainbow/Rainbow";

const puffyHearts = localFont({ src: "../fonts/PuffyHearts-Bold.otf" });

type Props = {
  title: string;
};

export default function PageBreak({ title }: Props) {
  return (
    <h2 className="mb-8">
      <span className={`${puffyHearts.className} text-3xl md:text-5xl`}>
        <Rainbow>{title}</Rainbow>
      </span>
    </h2>
  );
}
