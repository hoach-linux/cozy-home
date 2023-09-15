import { HomePageHeader } from "@/widgets/home-page-header";
import Image from "next/image";
import AnimalCare from "@/app/assets/animal-care.png"
import Link from "next/link";

export default function HomePage() {
    const services = [
        { name: "Tắm thú cưng", link: "washing" },
        { name: "Kiểm tra sức khỏe", link: "health-check" },
        { name: "Tắm thú cưng", link: "washing" },
        { name: "Kiểm tra sức khỏe", link: "health-check" },
        { name: "Tắm thú cưng", link: "washing" },
        { name: "Kiểm tra sức khỏe", link: "health-check" },
        { name: "Tắm thú cưng", link: "washing" },
        { name: "Kiểm tra sức khỏe", link: "health-check" },
    ]

    return (
        <div className="min-h-screen">
            <HomePageHeader />
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8" id="services">
                <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                            Tất cả các dịch vụ
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {services.map((item) => (
                        <Link href={`/services/${item.link}?params=${item.name}`}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 flex justify-center items-center h-52 sm:h-60">
                                <Image src={AnimalCare} alt={"pet"} width={64} height={64} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}