'use client'
import { useEffect, useState } from "react";

const script = [
  { cmd: "ls frontend/", out: "react  next  tailwind" },
  { cmd: "ls backend/", out: "node  nest  fastapi  spring" },
  { cmd: "ls mobile/", out: "flutter  react-native" },
  { cmd: "ls data/", out: "postgres  mysql  mongo" },
  { cmd: "ls ops/", out: "docker  git  vercel" },
];

/** A tiny terminal that types commands on its own and loops. */
export default function Terminal() {
  const [done, setDone] = useState<typeof script>([]);
  const [typed, setTyped] = useState("");
  const [step, setStep] = useState(0);
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    const cur = script[step % script.length];
    let timer: ReturnType<typeof setTimeout>;

    if (typed.length < cur.cmd.length) {
      timer = setTimeout(() => setTyped(cur.cmd.slice(0, typed.length + 1)), 70 + Math.random() * 60);
    } else if (!showOut) {
      timer = setTimeout(() => setShowOut(true), 350);
    } else {
      timer = setTimeout(() => {
        setDone((d) => [...d, cur].slice(-2));
        setTyped("");
        setShowOut(false);
        setStep((s) => s + 1);
      }, 1700);
    }
    return () => clearTimeout(timer);
  }, [typed, showOut, step]);

  const cur = script[step % script.length];

  return (
    <div className="glass px-5 py-4 font-mono text-[0.72rem] leading-relaxed shadow-2xl w-60">
      <div className="flex gap-1.5 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#f26b5b]" />
        <span className="w-2 h-2 rounded-full bg-[#ecd94c]" />
        <span className="w-2 h-2 rounded-full bg-[#a6d85a]" />
      </div>
      <div className="min-h-[5.6rem]">
        {done.map((l, i) => (
          <div key={`${l.cmd}-${i}`} className="opacity-60">
            <p><span className="text-[#a6d85a]">$</span> {l.cmd}</p>
            <p className="text-muted-foreground">{l.out}</p>
          </div>
        ))}
        <p>
          <span className="text-[#a6d85a]">$</span> {typed}
          {!showOut && <span className="cursor text-[#a6d85a]">▍</span>}
        </p>
        {showOut && <p className="text-[#ecd94c]">{cur.out}</p>}
      </div>
    </div>
  );
}
