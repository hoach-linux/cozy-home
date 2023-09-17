import { HomePageHeader } from "@/widgets/home-page-header";
import { ServicesList } from "@/widgets/services-list";

export async function getServicesList(url: string) {
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

    const services = await getServicesList(url)

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
                <ServicesList services={services.data} />
            </div>
        </div>
    )
}