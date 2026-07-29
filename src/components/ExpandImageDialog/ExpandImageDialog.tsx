import { BiX } from "react-icons/bi"
import { useDialogStore } from "../../store/useDialogStore"
import { motion } from "motion/react"
import { useEffect } from "react"

export default function ExpandImageDialog() {
    const { photoSrc, onClose, isOpen } = useDialogStore()

    useEffect(() => {
        if (!isOpen) return

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose()
        }

        window.addEventListener("keydown", closeOnEscape)
        return () => window.removeEventListener("keydown", closeOnEscape)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da imagem"
        >
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="relative flex h-[94vh] w-[96vw] max-w-450 items-center justify-center rounded-2xl border border-white/15 bg-gray-950 p-2 shadow-2xl sm:p-4"
            >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-black">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gray-950/75 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-gray-950 sm:right-4 sm:top-4"
                        aria-label="Fechar imagem ampliada"
                    >
                        <BiX className="text-3xl" />
                    </button>
                    <img
                        src={photoSrc}
                        className="max-h-full max-w-full object-contain"
                        alt="Imagem ampliada do projeto"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}
