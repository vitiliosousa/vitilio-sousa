import { googleColors } from "@/data/googleColors";
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiPostgresql, SiMysql, SiMongodb, SiSpringboot, SiFigma, SiGit, SiHtml5, SiCss3, SiTailwindcss, SiSupabase, SiTypescript, SiDocker} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skillsData = [
  { name: "HTML", icon: <SiHtml5 size={32} color={googleColors.red} />, color: googleColors.red },
  { name: "CSS", icon: <SiCss3 size={32} color={googleColors.blue} />, color: googleColors.blue },
  { name: "JavaScript", icon: <SiJavascript size={32} color={googleColors.yellow} />, color: googleColors.yellow },
  { name: "TypeScript", icon: <SiTypescript size={32} color={googleColors.blue} />, color: googleColors.blue },
  { name: "React", icon: <SiReact size={32} color={googleColors.blue} />, color: googleColors.blue },
  { name: "TailwindCSS", icon: <SiTailwindcss size={32} color={googleColors.blue} />, color: googleColors.blue },
  { name: "Next.js", icon: <SiNextdotjs size={32} color={googleColors.black} />, color: googleColors.black },
  { name: "Figma", icon: <SiFigma size={32} color={googleColors.red} />, color: googleColors.red },
  { name: "Node.js", icon: <SiNodedotjs size={32} color={googleColors.green} />, color: googleColors.green },
  { name: "Python", icon: <SiPython size={32} color={googleColors.yellow} />, color: googleColors.blue },
  { name: "Java", icon: <FaJava size={32} color={googleColors.red} />, color: googleColors.blue },
  { name: "Spring Boot", icon: <SiSpringboot size={32} color={googleColors.green} />, color: googleColors.green },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} color={googleColors.blue} />, color: googleColors.blue },
  { name: "MySQL", icon: <SiMysql size={32} color={googleColors.blue} />, color: googleColors.blue },
  { name: "MongoDB", icon: <SiMongodb size={32} color={googleColors.green} />, color: googleColors.green },
  { name: "Supabase", icon: <SiSupabase size={32} color={googleColors.green} />, color: googleColors.blue },
  { name: "Git/DevOps", icon: <SiGit size={32} color={googleColors.red} />, color: googleColors.blue },
  { name: "Docker", icon: <SiDocker size={32} color={googleColors.blue} />, color: googleColors.blue },
];
