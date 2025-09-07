import { googleColors } from "@/data/googleColors";

export default function About() {
  const stats = [
    {
      title: "Projetos",
      value: "10+",
      color: googleColors.red,
      description:
        "Projetos acadêmicos, pessoais e voluntários concluídos com sucesso",
    },
    {
      title: "Certificações",
      value: "10+",
      color: googleColors.green,
      description: "Em Data, Analytics, Cybersecurity e Desenvolvimento",
    },
    {
      title: "Áreas de Atuação",
      value: "5+",
      color: googleColors.blue,
      description: "Web, Mobile, Data, UI/UX e Segurança da Informação",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título e descrição */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: googleColors.blue }}>Sobre</span>{" "}
            <span style={{ color: googleColors.red }}>Mim</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engenheiro Informático e de Telecomunicações com experiência em
            desenvolvimento de sistemas, design de interfaces, análise de dados
            e segurança da informação. Apaixonado por criar soluções digitais
            inovadoras e centradas no utilizador, sempre buscando aprender e
            aplicar novas tecnologias.
          </p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
