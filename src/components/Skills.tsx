import { googleColors } from "@/data/googleColors";
import { skillsData as skills } from "@/data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: googleColors.green }}>Skills</span>{" "}
            <span style={{ color: googleColors.blue }}>&</span>{" "}
            <span style={{ color: googleColors.red }}>Tecnologias</span>
          </h2>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="group relative flex flex-col items-center p-4">
              <div
                className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-md group-hover:scale-110"
                style={{ border: `2px solid ${skill.color}20` }}
              >
                {/* Ícone ou inicial da tecnologia */}
                <div className="text-2xl font-bold" style={{ color: skill.color }}>
                  {skill.icon ? skill.icon : skill.name.charAt(0)}
                </div>
              </div>
              <span className="mt-3 text-sm font-medium text-gray-700 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
