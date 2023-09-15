'use client'

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios"
import { Suspense, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function ServicesItemPage() {
    const url = "https://directus.hoachnt.com"
    const pathname = usePathname()
    const [service, setService] = useState<any>({})
    const router = useRouter()

    async function fetchData() {
        try {
            if (url === undefined || pathname === null) return

            const response = await axios(`${url}/items${pathname}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            setService(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto flex flex-col lg:flex-row">
                    <button onClick={() => router.push('/')} className="flex items-center justify-center rounded-md border border-transparentpx-4 py-3 text-base font-medium text-orange-600 shadow-sm bg-orange-100 sm:px-3"><ArrowBackIosNewRounded /></button>
                    <Suspense fallback={<h1>Hello world</h1>}>
                        <Image src={`${url}/assets/${service.image}`} width={405} height={405} alt="image" className="mt-10 lg:mt-0 lg:ml-10 rounded-lg object-cover min-w-full lg:min-w-0" />
                    </Suspense>
                    <div className="mt-10 flex flex-col lg:mt-0 lg:ml-10">
                        <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">{service.title}</h1>
                        <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                            ${service.price}
                        </h1>
                        <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                            Miêu tả
                        </div>
                        <p className="max-w-xl mb-5">
                            {service.description}
                        </p>
                        <Button variant="outlined" color="warning">Đất dịch vụ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}