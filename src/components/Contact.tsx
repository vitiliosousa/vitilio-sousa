'use client'
import { googleColors } from "@/data/googleColors";
import { Mail, MapPin, Phone } from "lucide-react";
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

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: googleColors.yellow }}>Vamos</span>{" "}
            <span style={{ color: googleColors.blue }}>Conversar</span>
          </h2>
          <p className="text-lg text-gray-600">
            Interessado em trabalhar comigo? Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Lado esquerdo */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "vitiliodesousa@gmail.com",
                color: googleColors.red,
              },
              {
                icon: Phone,
                label: "Telefone",
                value: "+258 86 318 3634",
                color: googleColors.blue,
              },
              {
                icon: MapPin,
                label: "Localização",
                value: "Maputo, Moçambique",
                color: googleColors.green,
              },
            ].map((contact, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: contact.color + "15" }}
                >
                  <contact.icon size={24} style={{ color: contact.color }} />
                </div>
                <div>
                  <h4 className="font-semibold">{contact.label}</h4>
                  <p className="text-gray-600">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                placeholder="Sua mensagem"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <button
              className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: googleColors.blue }}
              type="submit"
            >
              Enviar Mensagem
            </button>

            {/* Mensagem de feedback */}
            {status === "success" && (
              <p className="text-green-600 font-medium">
                ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium">
                ❌ Erro ao enviar mensagem. Tente novamente mais tarde.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
