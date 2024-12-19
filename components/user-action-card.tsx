import { Cake, ChevronLeft, ChevronRight, CircleArrowUp, Contact, Heart, MapPin, X } from "lucide-react"
import { Button } from "./ui/button"
import { CardContent } from "./ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel"
import { useState } from "react"

const UserActionCard = ({ data }: any) => {
    const [api, setApi] = useState<CarouselApi>()

    return (
        <CardContent className="p-0">
            <div className="relative">
                <Carousel setApi={setApi} opts={{ loop: true }}>
                    <CarouselContent>
                        {data?.photos?.map((photo: string) => (
                            <CarouselItem key={photo} className="flex items-center justify-center w-full">
                                <img src={photo} className="w-full rounded-t-xl" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="absolute top-1/2 left-1 bg-white bg-opacity-80 rounded-full" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
                    <Button size="icon" variant="ghost" className="absolute top-1/2 right-1 bg-white bg-opacity-80 rounded-full" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
                </div>
            </div>

            <div className="flex gap-4 justify-center mt-2">
                <div className="border-2 p-2 border-red-600 text-red-600 rounded-full"><X /></div>
                <div className="border-2 p-2 border-pink-500 text-pink-500 rounded-full"><Heart /></div>
            </div>

            <div className="flex flex-col px-6 py-2 gap-1">
                <h1 className="font-semibold">{data?.name}, {data?.age}</h1>
                <div className="flex gap-2 items-center">
                    <MapPin size={16} className="text-purple-700" /><span className="text-sm text-zinc-700 flex-1">{data?.location}</span>
                </div>

                <div className="flex gap-2 items-center">
                    <CircleArrowUp size={16} className="text-purple-700" /><span className="text-sm text-zinc-700 flex-1">{data?.gender}</span>
                </div>

                <div className="flex gap-2 items-center">
                    <Cake size={16} className="text-purple-700" /><span className="text-sm text-zinc-700 flex-1">{data?.birthdate}</span>
                </div>

                <div className="flex gap-2">
                    <Contact size={16} className="text-purple-700" /><span className="text-sm text-zinc-700  flex-1">{data?.bio}</span>
                </div>
            </div>
        </CardContent>
    )
}

export default UserActionCard