'use client'

import useStore from "@/app/providers/store/useStore";
import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FinishPage() {
    const orderFinished = useStore((state: any) => (state.orderFinished))
    const router = useRouter()

    useEffect(() => {
        if (!orderFinished) return router.push("/")
    }, [])

    return (
        <section className="min-h-screen flex justify-center items-center px-2">
            <div className="flex items-center flex-col text-center">
                <CheckCircle className="!w-28 !h-28 mb-6" color="success" />
                <h1 className="font-medium text-4xl my-2">Dịch vụ đã được đặt thành công!</h1>
                <p className="text-stone-500 text-lg">Chúng tôi sẽ liên hệ với bạn ngay khi có thể</p>
                <Link href={"/"} className="hover:p-4 mt-6 flex items-center justify-center rounded-md border border-transparent text-base font-medium text-blue-600 shadow-sm bg-blue-100 p-3">Quay lại trang chủ</Link>
            </div>
        </section>
    )
}