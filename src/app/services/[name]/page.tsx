import Image from "next/image";
import AnimalCare from "@/app/assets/animal-care.png"

export default function ServicesItemPage({ params }: { params: { name: string } }) {
    return (
        <div className="flex h-screen flex-col justify-between">
            <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto flex flex-col sm:flex-row">
                    <Image src={AnimalCare} width={305} height={305} alt={params.name} className="rounded-lg" />
                    <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
                        <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">{params.name}</h1>
                        <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                            5.95$
                        </h1>
                        <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                            Miêu tả
                        </div>
                        <p className="max-w-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iste neque? Repudiandae nulla veniam beatae. Quod et explicabo possimus alias autem debitis ex aperiam! Nihil sit facere qui. Hic, laudantium!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}