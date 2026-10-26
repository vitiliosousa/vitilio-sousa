'use client'
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import profilePic from "@/assets/profile.png";
import DotField from "./DotField";
import Orbit from "./Orbit";
import Terminal from "./Terminal";
import Scramble from "./Scramble";
import Magnetic from "./Magnetic";

const words = ["sites", "apps", "APIs", "sistemas"];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-grid align-bottom text-accent-gradient">
      {words.map((w, k) => (
        <span
          key={w}
          aria-hidden={k !== i}
          className="col-start-1 row-start-1 transition-all duration-500 ease-out"
          style={{
            opacity: k === i ? 1 : 0,
            transform: k === i ? "none" : k === (i + 1) % words.length ? "translateY(60%)" : "translateY(-60%)",
            filter: k === i ? "none" : "blur(6px)",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

function GithubChip() {
  return (
    <a
      href="https://github.com/vitiliosousa"
      target="_blank"
      rel="noopener noreferrer"
      className="glass flutuar-chip !rounded-full flex items-center gap-3 px-4 py-2 text-xs shadow-xl hover:border-[#a6d85a]/50"
    >
      <Github size={14} className="text-[#a6d85a]" />
      <span className="font-mono">github.com/vitiliosousa</span>
    </a>
  );
}

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
    <section
      id="inicio"
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden pt-24 lg:pt-16 flex flex-col lg:min-h-[100svh]"
    >
      <DotField />

      <div className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center pb-20 lg:pb-12">
        {/* Texto */}
        <div className="pt-24 lg:pt-28">
          <p className="eyebrow subir mb-6" style={{ animationDelay: "200ms" }}>
            Vitilio Sousa · Full-stack developer
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-semibold leading-[1.04] tracking-tight">
            <span className="revelar block" style={{ animationDelay: "350ms" }}>Desenvolvo</span>
            <span className="revelar block" style={{ animationDelay: "500ms" }}><RotatingWord /></span>
            <span className="revelar block" style={{ animationDelay: "650ms" }}>
              que <Scramble text="funcionam." delay={900} className="text-accent-gradient" />
            </span>
          </h1>

          <p className="subir mt-8 text-lg text-muted-foreground max-w-md leading-relaxed" style={{ animationDelay: "800ms" }}>
            Desenvolvo interfaces, APIs e aplicações móveis, acompanhando cada
            produto do desenho à produção, com foco em código limpo e numa boa
            experiência de utilização.
          </p>

          <div className="subir mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "950ms" }}>
            <Magnetic>
              <a href="#projetos" className="btn-accent px-8 py-4 text-sm inline-flex items-center gap-2">
                Ver projectos <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="#contato" className="group inline-flex items-center gap-2 text-sm px-3 py-3 hover:text-[#a6d85a] transition-colors">
                Contactar
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Foto + órbita */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="parallax absolute inset-0" style={{ "--f": 8 } as React.CSSProperties}>
            <div className="absolute left-1/2 top-[6%] -translate-x-1/2 w-[110%] h-[78%] rounded-[50%] bg-gradient-to-b from-[#ecd94c]/35 via-[#9bd160]/20 to-transparent blur-3xl" />
            {/* anel da órbita */}
            <div className="absolute left-1/2 top-[60%] w-[96%] lg:w-[124%] h-[26%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10" style={{ rotate: "-9deg" }} />
          </div>

          <div className="parallax relative" style={{ "--f": -8 } as React.CSSProperties}>
            <div
              className="subir relative aspect-[3/4] z-10"
              style={{
                animationDelay: "300ms",
                maskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
              }}
            >
              <Image src={profilePic} alt="Vitilio Sousa" priority className="w-full h-full object-cover" />
            </div>
            <Orbit />
          </div>

          {/* Selo giratório */}
          <div className="parallax absolute -top-2 -right-2 lg:-right-8 z-40" style={{ "--f": 16 } as React.CSSProperties}>
            <div className="subir relative w-28 h-28" style={{ animationDelay: "1100ms" }}>
              <svg viewBox="0 0 120 120" className="girar w-full h-full">
                <defs><path id="circ" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" /></defs>
                <text className="fill-foreground" fontSize="10.5" letterSpacing="3" fontFamily="var(--font-mono)">
                  <textPath href="#circ">WEB • MOBILE • BACKEND • DADOS •</textPath>
                </text>
              </svg>
              <span className="absolute inset-0 m-auto w-9 h-9 rounded-full bg-[#141414] border border-white/20 flex items-center justify-center text-[#a6d85a] font-mono text-xs">
                {"</>"}
              </span>
            </div>
          </div>

          {/* Terminal */}
          <div className="parallax relative mt-6 w-fit mx-auto lg:mt-0 lg:mx-0 lg:absolute lg:-left-20 lg:-bottom-6 z-40" style={{ "--f": 18 } as React.CSSProperties}>
            <div className="subir" style={{ animationDelay: "1000ms" }}>
              <Terminal />
            </div>
          </div>

          {/* Relógio */}
          <div className="parallax relative mt-3 w-fit mx-auto lg:mt-0 lg:mx-0 lg:absolute lg:-right-6 lg:-bottom-2 z-40" style={{ "--f": 12 } as React.CSSProperties}>
            <div className="subir" style={{ animationDelay: "1200ms" }}>
              <GithubChip />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
