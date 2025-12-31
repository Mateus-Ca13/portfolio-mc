import { BiX } from "react-icons/bi"
import { useDialogStore } from "../../store/useDialogStore"
import { motion } from "motion/react"

export default function ExpandImageDialog() {

    const { photoSrc, onClose, isOpen } = useDialogStore()

    return (
        isOpen && 
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} className="h-screen w-screen fixed z-40 bg-black/40 top-0 left-0 flex justify-center items-center">
            <motion.div animate={{scale: 1}} initial={{scale: 0.9}} className="w-5/6  bg-white p-4   rounded-xl flex justify-center items-center">

                <div className="bg-gray-300 min-h-24 max-h-11/12 relative rounded-lg h-full w-full flex justify-center items-center">
                    <div onClick={onClose} className="absolute top-2 right-2 cursor-pointer bg-white/70 border border-gray-300 rounded-lg "><BiX className="text-red-500 text-2xl md:text-6xl hover:scale-110 duration-200"/></div>
                    <img src={photoSrc} className="h-full rounded-xl" alt="" />
                </div>
            </motion.div>
        </motion.div>
    )
}
