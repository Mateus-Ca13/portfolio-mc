import { motion } from 'motion/react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiNodejsFill, RiSupabaseLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMui, SiPrisma, SiReactrouter, SiShadcnui, SiZod } from 'react-icons/si'

export default function ToolsKnowlegde() {

    const techs = [
    { name: "Next.js", icon: <RiNextjsFill className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "React.js", icon: <FaReact className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Typescript", icon: <BiLogoTypescript className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Node.js", icon: <RiNodejsFill className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Javascript", icon: <FaJsSquare className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Supabase", icon: <RiSupabaseLine className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "MUI", icon: <SiMui className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Zod", icon: <SiZod className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Shadcn/ui", icon: <SiShadcnui className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "React Router", icon: <SiReactrouter className="text-3xl md:text-6xl lg:text-8xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-3xl md:text-6xl lg:text-8xl" /> },
  ];

    const slideDuration = 20 //em segundos

  return (
    <div className='flex relative mt-44 md:mt-0 h-28 md:h-48 w-full overflow-hidden px-16 gap-12'>
    <motion.div
        className="flex absolute gap-8 md:gap-12"
        animate={{
          x: ["90%", "-115%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: slideDuration, // ajusta a velocidade
        }}
      >
        {techs.map((t, i) => (
        <div
          key={i}
          className="flex text-gray-400 text-center flex-col items-center justify-center gap-2 hover:text-primary hover:scale-105 duration-200"
        >
          {t.icon}
          <span className="text-lg font-semibold">{t.name}</span>
        </div>
      ))}
        

    </motion.div>
    <motion.div
        className=" absolute flex gap-8 md:gap-12"
        animate={{
          x: ["90%", "-115%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: slideDuration, // ajusta a velocidade
          delay: slideDuration / 2
        }}
      >
        {techs.map((t, i) => (
        <div
          key={i}
          className="flex text-gray-400 text-center flex-col items-center justify-center gap-2 hover:text-primary hover:scale-105 duration-200"
        >
          {t.icon}
          <span className="text-lg font-semibold">{t.name}</span>
        </div>
      ))}
        

    </motion.div>
    </div>
  )
}
