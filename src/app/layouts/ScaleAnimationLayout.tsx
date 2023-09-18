'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export const ScaleAnimationLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname()

    return (
        <motion.div
            key={pathname}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.2, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 160,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}