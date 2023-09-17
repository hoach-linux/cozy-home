import { AnimationLayout } from "@/layouts/AnimationLayout";
import ServicesItemPage from "@/components/ServiceItemPage";
import Link from "next/link";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function Page() {

    return (
        <div>
            <Link href={"/"} className="z-10 fixed top-0 left-0 min-w-full hover:p-3 flex items-center justify-center border border-transparent py-2 lg:hidden text-base font-medium text-orange-600 shadow-sm bg-orange-100"><ArrowBackIosNewRounded /></Link>
            <AnimationLayout>
                <ServicesItemPage />
            </AnimationLayout>
        </div>
    )
}