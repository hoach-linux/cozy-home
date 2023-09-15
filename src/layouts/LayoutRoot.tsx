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
                    duration: 0.7,
                    ease: "easeIn"
                }}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                    },
                    exitState: {
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}