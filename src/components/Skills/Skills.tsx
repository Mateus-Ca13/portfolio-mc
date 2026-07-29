import { motion, useInView, useReducedMotion } from "motion/react"
import { useRef } from "react"
import type { IconType } from "react-icons"
import { BiLogoTypescript } from "react-icons/bi"
import { FaGitAlt, FaReact } from "react-icons/fa"
import {
  LuArrowUpRight,
  LuDatabase,
  LuDownload,
  LuGauge,
  LuLayers3,
  LuMonitorSmartphone,
  LuShieldCheck,
  LuWorkflow,
} from "react-icons/lu"
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiFastify, SiMui, SiPrisma } from "react-icons/si"
import { RevealInView } from "../RevealInView/RevealInView"

type Technology = {
  name: string
  shortName?: string
  icon?: IconType
}

const technologies: Technology[] = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React.js", icon: FaReact },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Material UI", shortName: "MUI", icon: SiMui },
  { name: "Zustand", shortName: "ZS" },
  { name: "Node.js", icon: RiNodejsFill },
  { name: "Express.js", icon: SiExpress },
  { name: "Fastify", icon: SiFastify },
  { name: "Prisma ORM", icon: SiPrisma },
  { name: "SQL", shortName: "SQL" },
  { name: "Git", icon: FaGitAlt },
]

const experience = [
  {
    eyebrow: "Atuação",
    value: "Full Stack",
    description: "Da interface à API e ao banco de dados.",
    icon: LuLayers3,
  },
  {
    eyebrow: "Ambientes",
    value: "Web + Smart TVs",
    description: "Experiências responsivas para diferentes telas.",
    icon: LuMonitorSmartphone,
  },
  {
    eyebrow: "Back-end",
    value: "REST + JWT",
    description: "APIs, autenticação e integrações de terceiros.",
    icon: LuShieldCheck,
  },
  {
    eyebrow: "Engenharia",
    value: "Performance",
    description: "Código orientado à manutenção e à experiência do usuário.",
    icon: LuGauge,
  },
]

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const resumeButtonRef = useRef<HTMLAnchorElement>(null)
  const isResumeButtonVisible = useInView(resumeButtonRef, { once: true, amount: 0.8 })

  return (
    <RevealInView threshold={0.00} once>
      <section
        id="skills"
        className="relative isolate overflow-hidden bg-gray-950 px-6 py-36 text-white sm:px-10 lg:px-12 lg:py-42"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 20% 40%, rgba(95,168,30,0.1) 0%, transparent 55%)",
              "radial-gradient(circle at 80% 78%, rgba(190,242,100,0.06) 0%, transparent 52%)",
            ].join(", "),
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl lg:mb-16">

            <h2 className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Stack <span className="text-primary">|</span> Experiência
              <span className="block text-2xl text-white/45">Aplicadas em projetos reais</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Mais do que uma lista de ferramentas: um panorama de como transformo
              tecnologia em produtos completos, responsivos e bem estruturados.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Stack
                  </p>
                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">Tecnologias</h3>
                </div>
                <LuDatabase className="text-2xl text-primary/70" aria-hidden="true" />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {technologies.map((technology, index) => {
                  const Icon = technology.icon

                  return (
                    <motion.div
                      key={technology.name}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: index * 0.04 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.025 }}
                      className="group relative flex min-h-32 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/4.5 p-4 transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/60 hover:bg-primary/8 hover:shadow-[0_0_30px_rgba(95,168,30,0.22)]"
                    >
                      {Icon ? (
                        <Icon className="relative text-3xl text-white/60 transition-colors duration-300 group-hover:text-primary" />
                      ) : (
                        <span className="relative text-2xl font-black tracking-tight text-white/60 transition-colors duration-300 group-hover:text-primary">
                          {technology.shortName}
                        </span>
                      )}
                      <span className="relative mt-5 text-sm font-bold text-white/80">
                        {technology.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </article>

            <article className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Na prática
                  </p>
                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">Experiência aplicada</h3>
                </div>
                <LuWorkflow className="text-2xl text-primary/70" aria-hidden="true" />
              </div>

              <div className="grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
                {experience.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.value}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: index * 0.07 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                      className="group relative h-full min-h-48 overflow-hidden rounded-2xl border border-white/10 bg-white/4.5 p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/60 hover:bg-primary/8 hover:shadow-[0_0_35px_rgba(95,168,30,0.2)]"
                    >
                      <div className="flex items-start justify-between">
                        <span className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                          <Icon className="text-xl" aria-hidden="true" />
                        </span>
                        <LuArrowUpRight className="text-lg text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                      <p className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/40">
                        {item.eyebrow}
                      </p>
                      <p className="mt-1 text-xl font-bold text-white sm:text-2xl">{item.value}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
                    </motion.div>
                  )
                })}
              </div>

              <a
                ref={resumeButtonRef}
                href="/cv_mateus_cavichion.pdf"
                download
                className="group relative mt-5 flex items-center justify-between overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 px-5 py-4 font-bold text-primary transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15"
              >
                <motion.span
                  aria-hidden="true"
                  initial={{ left: "-25%" }}
                  animate={{ left: isResumeButtonVisible ? "115%" : "-25%" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.15,
                    delay: shouldReduceMotion ? 0 : 0.65,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 w-20 -skew-x-20 bg-linear-to-r from-transparent via-white/60 to-transparent"
                />
                <span className="relative z-10">Baixar currículo completo</span>
                <LuDownload className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </article>
          </div>
        </div>
      </section>
    </RevealInView>
  )
}
