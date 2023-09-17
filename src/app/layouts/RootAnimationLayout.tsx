'use client'

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"


export const RootAnimationLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <AnimatePresence mode="wait">
            {children}
        </AnimatePresence>
    )
}