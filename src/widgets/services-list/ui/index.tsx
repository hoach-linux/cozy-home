'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export const variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}
export const children = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3
        }
    }
}
interface IService {
    title: string; id: string, image: string; price: number
}

export default function ServicesList({ services }: { services: IService[] }) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    return (
        <motion.div variants={variants} initial="hidden" animate="show" className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 overflow-y-hidden">
            {services.map((item: { title: string; id: string, image: string; price: number }) => (
                <motion.div variants={children} key={item.id}>
                    <Link href={`/services/${item.id}`} className="group">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:rounded-3xl transition-all duration-200 rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 flex justify-center items-center h-52 sm:h-60">
                            <Image src={`${url}/assets/${item.image}`} alt={"pet"} width={350} height={350} className="min-w-full min-h-full object-cover" />
                        </div>
                        <div className="mt-4 flex items-left flex-col md:flex-row md:justify-between text-base font-medium text-gray-900">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}