type ProjectStackSpanProps = {
    techs: string[]
}

export default function ProjectStackSpan({techs}: ProjectStackSpanProps) {
    const visibleLimit = 9
    const visibleTechs = techs.slice(0, visibleLimit)
    const hiddenTechs = techs.slice(visibleLimit)
    const remainingTechs = techs.length - visibleTechs.length

    return (
        <div className="mt-7 flex flex-wrap gap-2">
            {visibleTechs.map((tech) => (
                <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-600 transition-[border-color,color,background-color] duration-200 hover:border-primary/35 hover:bg-primary/5 hover:text-primary"
                >
                    {tech}
                </span>
            ))}
            {remainingTechs > 0 && (
                <span
                    tabIndex={0}
                    className="group/more relative cursor-help rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-bold text-primary outline-none transition-colors hover:border-primary/45 hover:bg-primary/12 focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-label={`Mais ${remainingTechs} tecnologias: ${hiddenTechs.join(", ")}`}
                >
                    +{remainingTechs}
                    <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-max max-w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-gray-200 bg-gray-950 px-4 py-3 text-left text-xs font-semibold leading-relaxed text-white opacity-0 shadow-xl transition-all duration-200 group-hover/more:translate-y-0 group-hover/more:opacity-100 group-focus/more:translate-y-0 group-focus/more:opacity-100"
                    >
                        <span className="mb-1.5 block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
                            Outras tecnologias
                        </span>
                        {hiddenTechs.join(" • ")}
                        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-950" />
                    </span>
                </span>
            )}
        </div>
    )
}