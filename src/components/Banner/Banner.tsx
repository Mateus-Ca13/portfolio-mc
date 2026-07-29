import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"
import { useEffect, useState } from "react"
import type { MouseEvent as ReactMouseEvent } from "react"

export default function Banner() {
  const shouldReduceMotion = useReducedMotion()
  const [handInPlace, setHandInPlace] = useState(false)
  const backgroundX = useMotionValue(0)
  const backgroundY = useMotionValue(0)
  const backgroundRotateX = useMotionValue(0)
  const backgroundRotateY = useMotionValue(0)
  const smoothX = useSpring(backgroundX, { stiffness: 110, damping: 22 })
  const smoothY = useSpring(backgroundY, { stiffness: 110, damping: 22 })
  const smoothRotateX = useSpring(backgroundRotateX, { stiffness: 90, damping: 20 })
  const smoothRotateY = useSpring(backgroundRotateY, { stiffness: 90, damping: 20 })

  useEffect(() => {
    if (shouldReduceMotion) return

    const timer = window.setTimeout(() => setHandInPlace(true), 1200)
    return () => window.clearTimeout(timer)
  }, [shouldReduceMotion])

  function handleMouseMove(event: ReactMouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const normalizedX = (x / bounds.width) - 0.5
    const normalizedY = (y / bounds.height) - 0.5

    backgroundX.set(normalizedX * -24)
    backgroundY.set(normalizedY * -18)
    backgroundRotateX.set(normalizedY * -4)
    backgroundRotateY.set(normalizedX * 4)
  }

  function handleMouseLeave() {
    backgroundX.set(0)
    backgroundY.set(0)
    backgroundRotateX.set(0)
    backgroundRotateY.set(0)
  }

  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-gray-400 px-6 pb-20 pt-28 sm:px-10 lg:px-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-12 -z-30"
        style={{
          x: smoothX,
          y: smoothY,
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          scale: 1.06,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f7faf5_45%,#f3f6f1_100%)]" />

        <div
          className="absolute inset-0 z-10 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(95,168,30,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(95,168,30,0.14) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 22% 32%, rgba(95,168,30,0.12) 0%, transparent 52%)",
              "radial-gradient(circle at 78% 24%, rgba(190,242,100,0.1) 0%, transparent 55%)",
              "radial-gradient(circle at 48% 70%, rgba(167,243,208,0.1) 0%, transparent 50%)",
            ].join(", "),
          }}
        />
      </motion.div>

      {!handInPlace && !shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
          <motion.span
            layoutId="hero-waving-hand"
            className="inline-block text-7xl"
            transition={{ layout: { duration: 0.55, ease: "easeInOut" } }}
          >
            <motion.span
              className="inline-block origin-center"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: [0, 1.6, 1.12, 1.32, 1],
                rotate: [0, -20, 22, -18, 18, -12, 10, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.12 },
                scale: {
                  duration: 0.75,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                rotate: {
                  duration: 0.9,
                  delay: 0.3,
                  ease: "easeInOut",
                },
              }}
            >
              👋
            </motion.span>
          </motion.span>
        </div>
      )}

      <div className="mx-auto grid w-full max-w-375 items-center gap-12 text-black lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="flex min-w-0 flex-col items-center gap-7 text-center lg:items-start lg:text-left">
          <p className="flex flex-wrap items-center justify-center gap-3 text-xl font-semibold lg:justify-start xl:text-3xl">
            {(handInPlace || shouldReduceMotion) && (
              <motion.span
                layoutId="hero-waving-hand"
                aria-hidden="true"
                className="relative z-30 inline-block origin-center text-4xl xl:text-5xl"
                transition={{ layout: { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeInOut" } }}
              >
                👋
              </motion.span>
            )}

            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 1.68 }}
            >
              Olá, mundo! Me chamo
            </motion.span>
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 1.92 }}
            className="font-lobster text-5xl leading-[1.05] text-primary sm:text-7xl lg:whitespace-nowrap xl:text-8xl 2xl:text-9xl"
          >
            Mateus Cavichion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 2.18 }}
            className="max-w-5xl text-lg font-bold leading-relaxed xl:text-2xl 2xl:text-3xl"
          >
            Desenvolvedor Full Stack <span className="text-primary/60">|</span> React.js{" "}
            <span className="text-primary/60">|</span> Node.js{" "}
            <span className="text-primary/60">|</span> TypeScript
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 2.4 }}
        >
          <motion.div
            className="absolute h-[115%] w-[115%] rounded-full border border-primary/25"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(95,168,30,0.8)]" />
          </motion.div>

          <div className="rounded-full bg-white/45 p-2 shadow-2xl shadow-primary/20 ring-1 ring-white/80 backdrop-blur-sm">
            <img
              src="./photo.png"
              className="h-56 rounded-full object-cover md:h-80 xl:h-96"
              alt="Retrato de Mateus Cavichion"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-gray-50 to-transparent" />
    </section>
  )
}
