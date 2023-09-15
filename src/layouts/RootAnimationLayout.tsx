'use client'

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"


export const RootAnimationLayout = ({ children }: { children: ReactNode }) => {
    return (
        <AnimatePresence mode="wait">
            {children}
        </AnimatePresence>
    )
}