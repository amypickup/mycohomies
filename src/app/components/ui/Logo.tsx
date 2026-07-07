import localFont from "next/font/local";
import Rainbow from "./rainbow/Rainbow";

const puffyHearts = localFont({ src: "../../fonts/PuffyHearts-Bold.otf" });

export default function Logo() {
  return (
    <span className={`${puffyHearts.className} font-bold uppercase `}>
      <Rainbow>Mycohomies</Rainbow>
    </span>
  );
}
