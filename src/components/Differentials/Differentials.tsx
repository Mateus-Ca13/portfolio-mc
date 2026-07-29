import { motion, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { IconType } from 'react-icons'
import {
  LuCheck,
  LuGauge,
  LuLayers3,
  LuLightbulb,
  LuMonitorSmartphone,
  LuRocket,
} from 'react-icons/lu'
import { useIsMobile } from '../../hooks/useIsMobile'

type Differential = {
  title: string
  description: string
  icon: IconType
}

const differentials: Differential[] = [
  {
    title: 'Experiência além do navegador',
    description:
      'Desenvolvo também para Smart TVs, onde navegação, memória e performance exigem decisões mais cuidadosas.',
    icon: LuMonitorSmartphone,
  },
  {
    title: 'Visão realmente ponta a ponta',
    description:
      'Conecto interface, regras de negócio, APIs, autenticação e banco de dados sem perder a visão do produto.',
    icon: LuLayers3,
  },
  {
    title: 'Performance como requisito',
    description:
      'Fluidez, carregamento e responsividade entram na solução desde o início — não apenas no acabamento.',
    icon: LuGauge,
  },
  {
    title: 'Visão de produto e usabilidade',
    description:
      'Atuo próximo ao papel de Product Owner, definindo fluxos, comportamentos e layouts com autonomia e atenção à experiência de quem usa.',
    icon: LuLightbulb,
  },
  {
    title: 'Entrega com continuidade',
    description:
      'Penso em código legível, manutenção e evolução para que a solução continue saudável depois da primeira versão.',
    icon: LuRocket,
  },
]

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Differentials() {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()

  return (
    <section
      id="differentials"
      className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:px-10 lg:px-12 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 18% 42%, rgba(95,168,30,0.06) 0%, transparent 55%)",
            "radial-gradient(circle at 82% 28%, rgba(190,242,100,0.07) 0%, transparent 52%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.035)_1px,transparent_1px)] bg-size-[42px_42px] mask-[linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={isMobile
            ? { once: true, amount: 'some', margin: '0px 0px -12% 0px' }
            : { once: true, amount: 0.4 }
          }
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-32 lg:self-start"
        >

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Meus <span className="text-primary">diferenciais</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            Mais do que dominar uma stack, busco entender o contexto, tomar boas decisões e
            construir soluções que funcionem bem hoje sem limitar o amanhã.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl bg-gray-950 p-6 text-white shadow-2xl shadow-gray-900/15 sm:p-8">
            <div className="flex items-center gap-3">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/45">
                Em uma frase...
              </p>
            </div>
            <p className="mt-6 italic text-lg font-bold leading-relaxed sm:text-xl">
              "Não entrego apenas funcionalidades. Entrego contexto, cuidado técnico e visão de
              evolução."
            </p>
            <div className="mt-7 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.1, delay: 0.35 }}
                className="h-full origin-left rounded-full bg-primary"
              />
            </div>
          </div>
        </motion.div>

        <motion.ol
          variants={shouldReduceMotion ? undefined : listVariants}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={isMobile
            ? { once: true, amount: 'some', margin: '0px 0px -12% 0px' }
            : { once: true, amount: 0.15 }
          }
          className="relative"
        >
          <div className="absolute bottom-8 left-6 top-8 w-px bg-gray-300 sm:left-7" aria-hidden="true">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={isMobile
                ? { once: true, amount: 'some', margin: '0px 0px -12% 0px' }
                : { once: true, amount: 0.2 }
              }
              transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: 'easeInOut' }}
              className="h-full origin-top bg-primary/70"
            />
          </div>

          {differentials.map((differential) => {
            const Icon = differential.icon

            return (
              <motion.li
                key={differential.title}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="group relative flex gap-5 pb-5 last:pb-0 sm:gap-7"
              >
                <motion.span
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: -4 }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-gray-100 text-primary shadow-[0_0_0_6px_rgb(243_244_246)] transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14"
                >
                  <LuCheck
                    className="absolute text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <Icon
                    className="text-xl transition-opacity duration-300 group-hover:opacity-0 sm:text-2xl"
                    aria-hidden="true"
                  />
                </motion.span>

                <div className="flex-1 rounded-3xl border border-gray-200 bg-white/75 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/8 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-gray-950 sm:text-xl">
                      {differential.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {differential.description}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
