'use client'
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Scramble from "./Scramble";
import Magnetic from "./Magnetic";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  const field =
    "w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 placeholder:text-muted-foreground focus:outline-none focus:border-[#a6d85a]/60 focus:shadow-[0_0_0_4px_rgba(166,216,90,0.12)] transition-all";

  return (
    <section id="contato" className="py-28 px-4">
      <Reveal className="max-w-6xl mx-auto">
        <div className="glass relative overflow-hidden p-8 md:p-16">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#e9d84f]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#3f8f86]/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-14">
            <div>
              <SectionTitle
                eyebrow="Contacto"
                lines={["Vamos", <span key="b" className="text-accent-gradient">conversar.</span>]}
              />

              <p className="mt-6 text-muted-foreground max-w-md">
                Para projectos, colaborações ou só para trocar ideias.
              </p>

              <a
                href="mailto:vitiliodesousa@gmail.com"
                className="group mt-8 inline-flex items-center gap-3 text-xl md:text-2xl border-b border-white/30 pb-2 hover:border-[#a6d85a] hover:text-[#a6d85a] transition-colors"
              >
                <Scramble text="vitiliodesousa@gmail.com" />
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
                <a href="tel:+258863183634" className="inline-flex items-center gap-3 hover:text-foreground transition-colors"><Phone size={16} className="text-[#a6d85a]" /> +258 86 318 3634</a>
                <a href="https://wa.me/258863183634" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-foreground transition-colors"><FaWhatsapp size={16} className="text-[#a6d85a]" /> WhatsApp</a>
                <span className="inline-flex items-center gap-3"><MapPin size={16} className="text-[#a6d85a]" /> Maputo, Moçambique</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="O teu nome" className={field} value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="email" placeholder="O teu email" className={field} value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <textarea placeholder="A tua mensagem" rows={5} className={`${field} resize-none`} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <Magnetic strength={0.12}>
                <button className="btn-accent px-10 py-4 text-sm" type="submit">
                  Enviar mensagem
                </button>
              </Magnetic>
              {status === "success" && (
                <p className="text-sm text-[#a6d85a]">Mensagem enviada! Respondo em breve.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">Erro ao enviar. Tenta novamente mais tarde.</p>
              )}
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
