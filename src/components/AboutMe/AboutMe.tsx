import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'motion/react'
import type { Variants } from 'motion/react'
import { useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const STICKY_TOP_OFFSET = 80

const milestones = [
    {
      year: '2023',
      title: 'Os primeiros passos',
      description:
        'Foi o ano em que descobri a programação e comecei a estudar desenvolvimento web. Entre HTML, CSS e JavaScript, encontrei uma área que despertou minha curiosidade e me motivou a aprender cada vez mais.',
    },
    {
      year: '2024',
      title: 'Minha entrada no mercado',
      description:
        'Iniciei minha trajetória profissional como desenvolvedor Front-end, trabalhando com React e TypeScript na construção de aplicações para Smart TVs. Foi nesse período que aprendi a desenvolver pensando em performance, manutenção e experiência do usuário.',
    },
    {
      year: '2025',
      title: 'Expandindo horizontes',
      description:
        'Passei a estudar o ecossistema Full Stack, aprofundando conhecimentos em Node.js, bancos de dados, APIs, autenticação e arquitetura de software. Também comecei a participar mais ativamente de decisões técnicas e da evolução dos projetos em que atuo.',
    },
    {
      year: '2026',
      title: 'Construindo além do código',
      description:
        'Hoje meu foco está em desenvolver aplicações completas e escaláveis, unindo Front-end, Back-end e boas práticas de arquitetura. Além do trabalho profissional, venho investindo em projetos próprios para evoluir como engenheiro de software e criar produtos com impacto real.',
    },
  ] as const;

const revealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08,
        },
    },
}

const revealItem: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.985 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
}

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const shouldReduceMotion = useReducedMotion()
    const isMobile = useIsMobile()
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 80px', 'end end'],
    })
    const timelineProgress = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ['0%', '33.333%', '66.666%', '100%', '100%'],
    )

    useMotionValueEvent(scrollYProgress, 'change', (latestProgress) => {
        const nextIndex = Math.min(
            Math.floor(latestProgress * milestones.length),
            milestones.length - 1,
        )

        setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex)
    })

    const selectMilestone = (index: number) => {
        const section = sectionRef.current
        if (!section) return

        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const scrollableDistance = section.offsetHeight - window.innerHeight + STICKY_TOP_OFFSET
        const milestonePosition = index / milestones.length + 0.01

        window.scrollTo({
            top: sectionTop - STICKY_TOP_OFFSET + scrollableDistance * milestonePosition,
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
        })
    }

    const activeMilestone = milestones[activeIndex]

  return (
    <section ref={sectionRef} id='about' className='relative h-[400vh] bg-linear-to-t from-primary/10 to-gray-50'>
        <div className='sticky top-20 flex min-h-[calc(100dvh-5rem)] w-full items-center overflow-hidden bg-inherit px-6 py-4 text-center md:px-12 xl:px-16'>
            <div
                className='pointer-events-none absolute inset-0'
                style={{
                    backgroundImage: [
                        'radial-gradient(circle at 18% 72%, rgba(95,168,30,0.05) 0%, transparent 48%)',
                        'radial-gradient(circle at 82% 78%, rgba(217,249,157,0.07) 0%, transparent 46%)',
                    ].join(', '),
                }}
            />

            <motion.div
                className='relative mx-auto flex w-full max-w-7xl flex-col items-center'
                variants={revealContainer}
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView='visible'
                viewport={isMobile
                    ? { once: true, amount: 'some', margin: '0px 0px -12% 0px' }
                    : { once: true, amount: 0.35 }
                }
            >
                <motion.div className='mx-auto max-w-3xl' variants={revealItem}>

                    <h2 className='mb-4 text-3xl font-bold md:text-5xl'>Quem é <span className="text-primary">Mateus</span>?</h2>
                    
                    <p className='text-sm leading-relaxed text-gray-600 sm:text-base md:text-xl'>
                        Role para percorrer uma história de curiosidade, aprendizado constante e evolução.
                    </p>
                </motion.div>

                <motion.div className='mt-6 w-full md:mt-8' variants={revealItem}>
                    <div className='relative mb-7 md:mb-12 md:mt-8'>
                        <div className='absolute left-[7%] right-[7%] top-4 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200 md:top-6'>
                            <motion.div
                                className='h-full rounded-full bg-primary shadow-[0_0_12px_rgba(95,168,30,0.65)]'
                                style={{ width: timelineProgress }}
                            />
                        </div>

                        <div className='relative z-10 grid grid-cols-4'>
                            {milestones.map((milestone, index) => {
                                const isActive = index === activeIndex
                                const isReached = index <= activeIndex

                                return (
                                    <button
                                        key={milestone.year}
                                        type='button'
                                        onClick={() => selectMilestone(index)}
                                        className='group flex min-w-0 flex-col items-center gap-2 focus:outline-none md:gap-3'
                                        aria-label={`Ir para a trajetória de ${milestone.year}`}
                                        aria-pressed={isActive}
                                    >
                                        <motion.span
                                            animate={{ scale: isActive ? 1.2 : 1 }}
                                            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                                            className={`flex h-8 w-8 items-center justify-center rounded-full border-4 cursor-pointer border-white shadow-md transition-colors md:h-10 md:w-10 ${
                                                isReached ? 'bg-primary' : 'bg-gray-300 group-hover:bg-primary'
                                            }`}
                                        >
                                            <span className={`h-2.5 w-2.5 rounded-full bg-white transition-opacity md:h-3 md:w-3 ${
                                                isActive ? 'opacity-100' : 'opacity-0'
                                            }`} />
                                        </motion.span>
                                        <span className={`text-xs font-bold transition-colors sm:text-base md:text-xl ${
                                            isActive ? 'text-primary' : 'text-gray-500 group-hover:text-primary'
                                        }`}>
                                            {milestone.year}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

                <motion.div className='mx-auto min-h-70 w-full max-w-3xl' variants={revealItem}>
                    <AnimatePresence mode='wait'>
                        <motion.article
                            key={activeMilestone.year}
                            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.98 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                            className='relative flex min-h-70 flex-col justify-center overflow-hidden rounded-2xl border border-primary/15 bg-white/90 p-5 text-center shadow-xl shadow-primary/10 backdrop-blur-sm md:p-8'
                            aria-live='polite'
                        >
                            <span className='text-xs font-bold uppercase tracking-[0.25em] text-primary md:text-sm'>
                                {activeMilestone.year}
                            </span>
                            <h3 className='relative mt-2 text-xl font-bold text-gray-900 md:mt-3 md:text-3xl'>
                                {activeMilestone.title}
                            </h3>
                            <p className='relative mt-3 text-sm leading-relaxed text-gray-600 sm:text-base md:mt-4 md:text-xl'>
                                {activeMilestone.description}
                            </p>
                        </motion.article>
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className='mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 md:mt-12'
                    variants={revealItem}
                >
                    <span>Continue rolando</span>
                    <motion.span
                        aria-hidden='true'
                        animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        ↓
                    </motion.span>
                </motion.div>
            </motion.div>
        </div>
    </section>
 )
}
