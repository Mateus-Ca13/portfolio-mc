import { FaGithub } from "react-icons/fa"
import { FaArrowsLeftRight  } from "react-icons/fa6"
import { LuExternalLink, LuMaximize2 } from "react-icons/lu"
import { useDialogStore } from "../../../store/useDialogStore"
import ProjectStackSpan from "./ProjectStackSpan/ProjectStackSpan"
import { motion, useReducedMotion } from "motion/react"
import { useIsMobile } from "../../../hooks/useIsMobile"
import { useLayoutEffect, useRef } from "react"

export type ProjectCardProps = {
    name: string
    description: string
    githubBe?: string
    githubFe?: string
    demo?: string
    techs: string[]
    images: string[]
    video: string
    index?: number
}

export default function ProjectCard({
    name,
    description,
    githubBe,
    githubFe,
    demo,
    techs,
    images,
    video,
    index = 0,
}: ProjectCardProps) {
    const onOpen = useDialogStore(state => state.onOpen)
    const shouldReduceMotion = useReducedMotion()
    const isMobile = useIsMobile()
    const mobileRailRef = useRef<HTMLDivElement>(null)
    const hasTwoRepositories = Boolean(githubBe && githubFe)
    const isReversed = index % 2 !== 0

    useLayoutEffect(() => {
        const rail = mobileRailRef.current

        if (!rail) return

        rail.scrollLeft = 0
    }, [])

    return (
        <motion.article
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile
                ? { once: true, amount: "some", margin: "0px 0px -12% 0px" }
                : { once: true, amount: 0.15 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: index * 0.04 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/95 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow] duration-500 hover:border-primary/30 hover:shadow-[0_25px_90px_rgba(95,168,30,0.13)]"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div
                className={`grid ${
                    isReversed
                        ? "lg:grid-cols-[0.9fr_1.1fr]"
                        : "lg:grid-cols-[1.1fr_0.9fr]"
                }`}
            >
                <div
                    className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${
                        isReversed ? "lg:order-2" : ""
                    }`}
                >
                    <h3 className="max-w-xl text-2xl font-bold leading-tight text-gray-950 sm:text-3xl xl:text-4xl">
                        {name}
                    </h3>
                    <p className="mt-5 max-w-2xl text-left text-base leading-relaxed text-gray-600 sm:text-lg">
                        {description}
                    </p>

                    <ProjectStackSpan techs={techs} />

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noreferrer"
                                className="group/button flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-bold text-white transition-[filter,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:brightness-90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                            >
                                Ver projeto
                                <LuExternalLink className="transition-transform group-hover/button:translate-x-0.5" />
                            </a>
                        )}

                        {githubFe && (
                            <a
                                href={githubFe}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 font-bold text-gray-700 transition-[border-color,color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/50 hover:text-primary hover:shadow-md active:scale-[0.98]"
                            >
                                <FaGithub className="text-lg" />
                                {hasTwoRepositories ? "Repositório FE" : "Repositório"}
                            </a>
                        )}

                        {githubBe && (
                            <a
                                href={githubBe}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 font-bold text-gray-700 transition-[border-color,color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/50 hover:text-primary hover:shadow-md active:scale-[0.98]"
                            >
                                <FaGithub className="text-lg" />
                                {hasTwoRepositories ? "Repositório BE" : "Repositório"}
                            </a>
                        )}
                    </div>
                </div>

                <div
                    className={`relative overflow-hidden bg-gray-950 p-4 sm:p-5 lg:p-6 ${
                        isReversed ? "lg:order-1" : ""
                    }`}
                >
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 78% 18%, rgba(95,168,30,0.12) 0%, transparent 55%)",
                        }}
                    />

                    {isMobile ? (
                    <div className="relative">
                        <div
                            ref={mobileRailRef}
                            className="flex w-full justify-start snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-pl-0 scrollbar-none pb-1"
                        >
                            <button
                                type="button"
                                onClick={() => onOpen(images[0])}
                                className="group/media relative h-42 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                                aria-label={`Expandir imagem principal do projeto ${name}`}
                            >
                                <img
                                    className="h-full w-auto max-w-none rounded-2xl object-contain transition-[filter] duration-200 group-hover/media:brightness-75"
                                    src={images[0]}
                                    alt={`Tela principal do projeto ${name}`}
                                    loading="lazy"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => onOpen(images[1])}
                                className="group/media relative h-42 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                                aria-label={`Expandir imagem secundária do projeto ${name}`}
                            >
                                <img
                                    className="h-full w-auto max-w-none rounded-2xl object-contain transition-[filter] duration-200 group-hover/media:brightness-75"
                                    src={images[1]}
                                    alt={`Outra tela do projeto ${name}`}
                                    loading="lazy"
                                />
                            </button>

                            <div className="relative h-42 w-[min(18rem,70vw)] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                                <video
                                    className="h-full w-full object-contain"
                                    src={video}
                                    controls
                                    preload="metadata"
                                    aria-label={`Demonstração em vídeo do projeto ${name}`}
                                />
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white/45">
                            <p>Deslize para ver o restante das telas</p>
                            <FaArrowsLeftRight  aria-hidden="true" />
                        </div>
                    </div>
                    ) : (
                    <div className="relative grid gap-4 p-8 grid-rows-[minmax(0,14rem)_minmax(0,9rem)] xl:grid-rows-[minmax(0,16rem)_minmax(0,10rem)]">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <video
                                className="h-full w-full object-contain"
                                src={video}
                                controls
                                preload="metadata"
                                aria-label={`Demonstração em vídeo do projeto ${name}`}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => onOpen(images[0])}
                                className="group/media relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                                aria-label={`Expandir imagem principal do projeto ${name}`}
                            >
                                <img
                                    className="max-h-full max-w-full rounded-lg object-contain shadow-xl transition-transform duration-500 group-hover/media:scale-[1.035]"
                                    src={images[0]}
                                    alt={`Tela principal do projeto ${name}`}
                                    loading="lazy"
                                />
                                <span className="absolute right-2 top-2 rounded-full bg-gray-950/70 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/media:opacity-100">
                                    <LuMaximize2 />
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => onOpen(images[1])}
                                className="group/media relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                                aria-label={`Expandir imagem secundária do projeto ${name}`}
                            >
                                <img
                                    className="max-h-full max-w-full rounded-lg object-contain shadow-xl transition-transform duration-500 group-hover/media:scale-[1.035]"
                                    src={images[1]}
                                    alt={`Outra tela do projeto ${name}`}
                                    loading="lazy"
                                />
                                <span className="absolute right-2 top-2 rounded-full bg-gray-950/70 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/media:opacity-100">
                                    <LuMaximize2 />
                                </span>
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </motion.article>
    )
}
