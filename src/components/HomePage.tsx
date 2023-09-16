import { HomePageHeader } from "@/widgets/home-page-header";
import Image from "next/image";
import Link from "next/link";

async function getData(url: string) {
    const res = await fetch(`${url}/items/services`, {
        next: {
            revalidate: 3600
        },
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()

}

export default async function HomePage() {
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    if (url === undefined) return

    const services = await getData(url)

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
                    {services.data.map((item: { title: string; id: string, image: string; price: number }) => (
                        <Link href={`/services/${item.id}`} key={item.id} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:rounded-3xl transition-all duration-200 rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 flex justify-center items-center h-52 sm:h-60">
                                <Image src={`${url}/assets/${item.image}`} alt={"pet"} width={350} height={350} className="min-w-full min-h-full object-cover" />
                            </div>
                            <div className="mt-4 flex items-left flex-col md:flex-row md:justify-between text-base font-medium text-gray-900">
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}