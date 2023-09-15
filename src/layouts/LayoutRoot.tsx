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
        <AnimatePresence mode="wait">
            {children && (
                <motion.div
                    key={pathname}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    variants={{
                        initialState: {
                            opacity: 0,
                        },
                        animateState: {
                            opacity: 1,
                        },
                        exitState: {
                            opacity: 0,
                        }
                    }}
                    transition={{
                        duration: 0.5,

                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}