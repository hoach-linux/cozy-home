'use client'

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export const LayoutRoot = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname()

    return (
        <AnimatePresence>
            <motion.div
                key={pathname}
                transition={{
                    duration: 0.5,
                }}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                variants={{
                    initialState: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animateState: {
                        opacity: 1,
                        scale: 1
                    },
                    exitState: {
                        opacity: 0,
                        scale: 0.8,
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}