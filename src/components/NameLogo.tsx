import { motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const nameCharacters = Array.from('Mateus Cavichion')

type NameLogoProps = {
  compactDelay?: number
  animateWhenVisible?: boolean
}

export default function NameLogo({
  compactDelay = 1400,
  animateWhenVisible = false,
}: NameLogoProps) {
  const logoRef = useRef<HTMLAnchorElement>(null)
  const isVisible = useInView(logoRef, { once: true, amount: 0.8 })
  const shouldReduceMotion = useReducedMotion()
  const [isCompact, setIsCompact] = useState(false)
  const canStart = !animateWhenVisible || isVisible

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsCompact(true)
      return
    }

    if (!canStart) return

    const timer = window.setTimeout(() => setIsCompact(true), compactDelay)
    return () => window.clearTimeout(timer)
  }, [canStart, compactDelay, shouldReduceMotion])

  return (
    <Link
      ref={logoRef}
      to="/"
      aria-label="Mateus Cavichion — início"
      className="flex h-10 items-center overflow-hidden rounded-full bg-primary px-4 font-lobster text-2xl font-normal text-white shadow-md shadow-primary/20"
    >
      {nameCharacters.map((character, index) => {
        const isInitial = index === 0 || index === 7
        const characterWidth = character === ' ' ? 8 : 21

        if (isInitial) {
          return (
            <motion.span
              layout="position"
              key={`${character}-${index}`}
              transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
              className="inline-block"
            >
              {character}
            </motion.span>
          )
        }

        return (
          <motion.span
            key={`${character}-${index}`}
            aria-hidden={isCompact}
            initial={false}
            animate={{
              opacity: isCompact ? 0 : 1,
              maxWidth: isCompact ? 0 : characterWidth,
              y: isCompact ? -8 : 0,
              scale: isCompact ? 0.75 : 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.36,
              delay: isCompact && !shouldReduceMotion
                ? (nameCharacters.length - index) * 0.035
                : 0,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="inline-block overflow-hidden whitespace-pre"
          >
            {character}
          </motion.span>
        )
      })}
    </Link>
  )
}
