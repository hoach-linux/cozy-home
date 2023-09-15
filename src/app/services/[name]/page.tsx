'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import axios from "axios"
import { useState } from "react";

export default function ServicesItemPage() {
    const url = process.env.SERVER_URL
    const pathname = usePathname()
    const [service, setService] = useState<any>("")
    if (url === undefined || pathname === null) return

    axios(`${url}/services/${pathname}`)
        .then(response => {
            setService(response.data)
            // Здесь вы можете использовать данные service для рендеринга вашего компонента
        })
        .catch(error => {
            // Обработка ошибки запроса
            console.error(error);
        });

    return (
        <div className="flex h-screen flex-col justify-between">
            <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto flex flex-col sm:flex-row">
                    <Image src={`${url}/assets/${service.image}`} width={305} height={305} alt={pathname} className="rounded-lg" />
                    <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
                        <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">{service.title}</h1>
                        <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                            ${service.price}
                        </h1>
                        <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                            Miêu tả
                        </div>
                        <p className="max-w-xl">
                            {service.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}