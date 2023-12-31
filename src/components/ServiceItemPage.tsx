'use client'

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios"
import { useEffect, useState } from "react";
import { Button, Skeleton } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import useStore from "@/app/providers/store/useStore";

export default function ServicesItemPage() {
    const url = process.env.NEXT_PUBLIC_SERVER_URL
    const pathname = usePathname()
    const [service, setService] = useState<any>({})
    const router = useRouter()
    const setServicesOrder = useStore((state: any) => state.setServicesOrder);

    async function getServiceById(url: string, id: string) {
        try {
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
        if (url === undefined || pathname === null) return

        getServiceById(url, pathname)
    }, [])

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <div className="mx-auto mt-10 lg:mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto flex flex-col lg:flex-row">
                    <button onClick={() => router.push('/')} className="hover:px-4 hover:py-4 hidden lg:flex items-center justify-center rounded-md border border-transparent py-3 text-base font-medium text-orange-600 shadow-sm bg-orange-100 px-3"><ArrowBackIosNewRounded /></button>
                    {service.image ? (
                        <Image src={`${url}/assets/${service.image}`} width={405} height={405} alt="image" className="mt-10 lg:mt-0 lg:ml-10 rounded-lg object-cover min-w-full lg:min-w-0" />
                    )
                        : <Skeleton variant="rounded" className="lg:!ml-10 !min-h-full !mt-10 lg:!mt-0">
                            <Image src={`${url}/assets/${service.image}`} width={405} height={405} alt="image" className="mt-10 lg:mt-0 lg:ml-10 rounded-lg object-cover min-w-full lg:min-w-0" />
                        </Skeleton>
                    }
                    <div className="mt-10 flex flex-col lg:mt-0 lg:ml-10">
                        {service.title ? (
                            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">{service.title}</h1>

                        ) :
                            <Skeleton variant="rounded" className="!min-w-full">
                                <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">service title</h1>
                            </Skeleton>
                        }
                        {service.price ? (
                            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                                ${service.price}
                            </h1>
                        ) : service.price === 0 ? (
                            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                                Miễn phí
                            </h1>
                        ) :
                            <Skeleton variant="rounded" className="!mt-3">
                                <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                                    service price
                                </h1>
                            </Skeleton>}
                        <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                            Miêu tả
                        </div>
                        {service.description ?
                            <p className="max-w-xl mb-5">
                                {service.description}
                            </p>
                            :
                            <Skeleton variant="rounded" className="!max-w-xl !mb-5">
                                <p className="max-w-xl mb-5">
                                    service description
                                </p>
                            </Skeleton>
                        }
                        <Button onClick={() => {
                            setServicesOrder(service)
                            router.push("/order")
                        }} variant="contained" size="large" className="!bg-orange-500 hover:!bg-orange-600 !shadow-none" >Đặt dịch vụ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}