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
    "w-full bg-transparent border-b border-white/25 px-0 py-4 text-base placeholder:text-white/35 focus:outline-none focus:border-[#ff3b2f] transition-colors";

  return (
    <section id="contato" className="px-3 md:px-5 py-6 md:py-10">
      <Reveal>
        <div className="frame overflow-hidden p-8 md:p-16">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#ff6a2a]/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-16">
            <div>
              <SectionTitle
                eyebrow="Contacto"
                lines={["Vamos", <span key="b" className="text-accent-gradient">conversar.</span>]}
              />

              <p className="mt-8 text-muted-foreground max-w-md">
                Para projectos, colaborações ou só para trocar ideias.
              </p>

              <a
                href="mailto:vitiliodesousa@gmail.com"
                data-cursor
                className="group mt-10 inline-flex items-center gap-3 text-xl md:text-3xl font-bold border-b border-white/30 pb-2 hover:border-[#ff3b2f] hover:text-[#ff3b2f] transition-colors"
              >
                <Scramble text="vitiliodesousa@gmail.com" />
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="mt-10 flex flex-col gap-3 text-sm text-muted-foreground">
                <a href="tel:+258863183634" className="inline-flex items-center gap-3 hover:text-foreground transition-colors"><Phone size={15} className="text-[#ff3b2f]" /> +258 86 318 3634</a>
                <a href="https://wa.me/258863183634" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-foreground transition-colors"><FaWhatsapp size={15} className="text-[#ff3b2f]" /> WhatsApp</a>
                <span className="inline-flex items-center gap-3"><MapPin size={15} className="text-[#ff3b2f]" /> Maputo, Moçambique</span>
              </div>
            </div>

            <form className="space-y-6 self-end" onSubmit={handleSubmit}>
              <input type="text" placeholder="O teu nome" className={field} value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="email" placeholder="O teu email" className={field} value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <textarea placeholder="A tua mensagem" rows={4} className={`${field} resize-none`} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <div className="pt-2">
                <Magnetic strength={0.12}>
                  <button className="btn-accent px-10 py-4 text-xs tracking-[0.25em] uppercase" type="submit">
                    Enviar
                  </button>
                </Magnetic>
              </div>
              {status === "success" && (
                <p className="text-sm text-[#ff3b2f]">Mensagem enviada! Respondo em breve.</p>
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
