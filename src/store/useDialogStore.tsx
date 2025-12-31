import { create } from "zustand"

type useDialogStoreProps = {
    isOpen: boolean
    photoSrc: string
    onOpen: (photoSrc: string) => void
    onClose: () => void

}

export const useDialogStore = create<useDialogStoreProps>((set) => ({
    isOpen: false,
    photoSrc: "",
    onOpen: (photoSrc: string) => set({isOpen: true, photoSrc: photoSrc}),
    onClose: () => set({isOpen: false})
}))