'use client'

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useStore from "../providers/store/useStore";


export default function NavigationEventsLayout() {
    const pathname = usePathname()
    const router = useRouter()
    const servicesOrder = useStore((state: any) => state.servicesOrder)
    const orderFinished = useStore((state: any) => (state.orderFinished))

    useEffect(() => {
        if (servicesOrder.length < 1 && pathname === "/order") {
            router.push("/")
        }
        if (!orderFinished && pathname === "/finish") {
            router.push("/")
        }

    }, [pathname])

    return null
}