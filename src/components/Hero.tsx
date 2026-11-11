'use client'
import { useRef } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePic from "@/assets/profile.png";

const social = [
  { icon: Github, href: "https://github.com/vitiliosousa", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/vitilio-sousa", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vitiliodesousa@gmail.com", label: "Email" },
];

function Letters({ word, delay = 0 }: { word: string; delay?: number }) {
  return (
    <>
      {word.split("").map((l, i) => (
        <span key={i} className="letra inline-block bg-gradient-to-b from-white to-[#8c8c8c] bg-clip-text text-transparent" style={{ animationDelay: `${delay + i * 80}ms` }}>
          {l}
        </span>
      ))}
    </>
  );
}

const textStyle = "display absolute inset-x-0 text-center select-none pointer-events-none text-[21vw] md:text-[15.5vw]";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
    el.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };

  return (
    <section id="inicio" ref={ref} onPointerMove={onMove} className="px-3 md:px-5 pt-3 md:pt-5">
      <div className="frame overflow-hidden h-[calc(100svh-1.5rem)] md:h-[calc(100svh-2.5rem)] min-h-[640px]">
        {/* Etiqueta */}
        <div className="absolute top-[17%] md:top-[19%] right-[6%] z-30 flex border border-white/30 text-[0.6rem] tracking-[0.3em] uppercase">
          <span className="px-2 py-1.5 bg-white text-black font-bold">26</span>
          <span className="px-3 py-1.5">Portfolio</span>
        </div>

        {/* Nome, parte de trás */}
        <div className="parallax absolute inset-x-0 top-[36%] md:top-[10%] z-0" style={{ "--f": 14 } as React.CSSProperties}>
          <h1 className={`${textStyle} relative`} aria-label="Vitilio Sousa">
            <Letters word="VITILIO" delay={200} />
          </h1>
        </div>

        {/* Foto no meio */}
        <div className="parallax absolute bottom-0 left-1/2 z-10 h-[58%] md:h-[90%] aspect-[3/4] -translate-x-1/2" style={{ "--f": -10 } as React.CSSProperties}>
          <div className="relative h-full w-full subir" style={{ animationDelay: "500ms" }}>
            <Image src={profilePic} alt="Vitilio Sousa" priority className="h-full w-full object-cover object-bottom" />
          </div>
        </div>

        {/* Nome, parte da frente */}
        <div className="parallax absolute inset-x-0 top-[72%] md:top-[51%] z-20" style={{ "--f": 18 } as React.CSSProperties}>
          <p aria-hidden className={`${textStyle} relative`}>
            <Letters word="SOUSA" delay={650} />
          </p>
        </div>

        {/* Bolhas */}
        <span aria-hidden className="bolha absolute right-[30%] top-[33%] z-30 h-3 w-3 rounded-full border border-white/70" />
        <span aria-hidden className="bolha absolute right-[26%] top-[38%] z-30 h-2 w-2 rounded-full border border-white/70" style={{ animationDelay: "2s" }} />
        <span aria-hidden className="bolha absolute right-[33%] top-[40%] z-30 h-1.5 w-1.5 rounded-full border border-white/70" style={{ animationDelay: "4s" }} />

        {/* Descrição, canto inferior esquerdo */}
        <div className="subir absolute bottom-[9%] left-[6%] z-30 hidden md:block" style={{ animationDelay: "1100ms" }}>
          <div className="border-t border-white/40 pt-5 pr-5 border-r text-right">
            <p className="caps !text-white/80 leading-[2.4]">Desenvolvedor<br />Full-stack</p>
            <p className="caps mt-1 leading-[2.4]">Web · Mobile · Backend</p>
          </div>
          <span className="block h-24 w-px bg-white/40 ml-auto" />
        </div>

        {/* Scroll */}
        <a href="#sobre" className="subir absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animationDelay: "1300ms" }}>
          <span className="relative h-9 w-5 rounded-full border border-white/60">
            <span className="roda absolute left-1/2 top-2 h-1.5 w-0.5 -translate-x-1/2 rounded-full bg-[#ff3b2f]" />
          </span>
          <span className="caps !text-[0.55rem]">Scroll</span>
        </a>

        {/* Redes, canto inferior direito */}
        <div className="subir absolute bottom-[5%] right-[5%] z-30 flex items-center gap-4" style={{ animationDelay: "1400ms" }}>
          <span className="caps hidden sm:inline !text-white/70">@vitiliosousa</span>
          <span className="hidden sm:block h-px w-16 bg-white/25" />
          {social.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/70 hover:text-[#ff3b2f] transition-colors">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
