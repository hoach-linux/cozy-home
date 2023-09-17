'use client'

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"


export const RootAnimationLayout = ({ children }: { children: ReactNode }) => {

    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            {children}
        </AnimatePresence>
    )
}