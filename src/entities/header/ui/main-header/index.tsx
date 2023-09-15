import React from "react"
import styles from "./styles.module.scss"
import Link from "next/link"
import { ArrowForwardIosRounded } from "@mui/icons-material"

export function MainHeader() {
    return (
        <header className={`${styles.header}`}>
            <div className="px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 bg-black/30">
                <p className="left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide text-orange-600">
                    The Cozy Home
                </p>
                <h1 className="mt-3 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
                    <span className="block text-white">
                        Cuộc sống tốt đẹp hơn với
                    </span>
                    <span className="block text-orange-500">
                        cozy home
                    </span>
                </h1>
                <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-2xl sm:justify-center">
                    <Link href="#services" className="group flex items-center transition-all duration-200 justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-6">
                        <span className="group-hover:mr-4 transition-all duration-200">Xem dịch vụ</span>
                        <ArrowForwardIosRounded className="hidden opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                </div>
            </div>
        </header>
    )
}