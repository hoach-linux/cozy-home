"use client"

import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
    const router = useRouter()
    const [orderInfo, setOrderInfo] = useState({
        name: "",
        address: "",
        email: "",
        numberPhone: 0,
    })

    return (
        <section className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center flex-col">
            <button onClick={() => router.back()} className="w-48 hover:w-full hover:px-3 hover:py-3 mb-1 transition-all ease-in-out duration-200 flex items-center justify-center rounded-md border border-transparent py-2 text-base font-medium text-orange-600 shadow-sm bg-orange-100 sm:px-2"><ArrowBackIosNewRounded /></button>
            <TextField label="Họ, tên" type="text" fullWidth margin="dense" color="warning" onChange={(event) => setOrderInfo({ ...orderInfo, name: event.target.value })} />
            <TextField label="Địa chỉ" type="text" fullWidth margin="dense" color="warning" onChange={(event) => setOrderInfo({ ...orderInfo, address: event.target.value })} />
            <TextField label="E-mail" type="email" fullWidth margin="dense" color="warning" onChange={(event) => setOrderInfo({ ...orderInfo, email: event.target.value })} />
            <TextField label="Số điện thoại" type="number" fullWidth margin="dense" color="warning" onChange={(event) => setOrderInfo({ ...orderInfo, numberPhone: +event.target.value })} />
            <Button fullWidth variant="contained" size="large" color="warning" className="mt-2 bg-orange-500 py-3">Đặt dịch vụ</Button>
        </section>
    )
}