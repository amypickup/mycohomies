interface RainbowProps {
  children: React.ReactNode;
}

export default function Rainbow({ children }: RainbowProps) {
  return (
    <span
      className={`text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-orange-400 to-amber-300 hover:from-violet-600 hover:via-sky-400 hover:to-teal-400`}
    >
      {children}
    </span>
  );
}
