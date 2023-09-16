'use client'

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios"
import { Suspense, useEffect, useState } from "react";
import { Button, Skeleton } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import useStore from "@/app/providers/store/useStore";

export default function ServicesItemPage() {
    const url = process.env.NEXT_PUBLIC_SERVER_URL
    const pathname = usePathname()
    const [service, setService] = useState<any>({})
    const router = useRouter()
    const setServicesOrder = useStore((state: any) => state.setServicesOrder);

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
        window.scrollTo(0, 0)
        fetchData()
    }, [])

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <div className="mx-auto mt-10 lg:mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto flex flex-col lg:flex-row">
                    <button onClick={() => router.push('/')} className="hover:px-3 hover:py-3 flex items-center justify-center rounded-md border border-transparent py-2 text-base font-medium text-orange-600 shadow-sm bg-orange-100 sm:px-2"><ArrowBackIosNewRounded /></button>
                    {service.image ? (
                        <Image src={`${url}/assets/${service.image}`} width={405} height={405} alt="image" className="mt-10 lg:mt-0 lg:ml-10 rounded-lg object-cover min-w-full lg:min-w-0" />
                    )
                        : <Skeleton variant="rounded" className="lg:ml-10 min-h-full mt-10 lg:mt-0">
                            <Image src={`${url}/assets/${service.image}`} width={405} height={405} alt="image" className="mt-10 lg:mt-0 lg:ml-10 rounded-lg object-cover min-w-full lg:min-w-0" />
                        </Skeleton>
                    }
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
                        <Button onClick={() => {
                            setServicesOrder(service)
                            router.push("/order")
                        }} variant="contained" size="large" className="bg-orange-500 !shadow-none" color="warning" >Đặt dịch vụ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}