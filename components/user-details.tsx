import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { Cake, ChevronLeft, ChevronRight, CircleArrowUp, Contact, Heart, MapPin, X } from "lucide-react"

const UserDetails = ({ data }: any) => {
    const [api, setApi] = useState<CarouselApi>()

    if (!data) {
        return <div className="flex justify-center items-center p-6 w-full h-full text-zinc-400 text-lg">Click on user card to see the details</div>
    }

    return (
        <div className="flex gap-4 p-6 w-full">
            <Card className="w-2/5">
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
            </Card>

            <Card className="w-3/5">
                <CardContent className="flex flex-col gap-3 p-6">
                    <h1 className="text-xl font-semibold">Details</h1>
                    <div className="grid grid-cols-2 gap-1 text-sm text-zinc-700">
                        <p>Height</p>
                        <p>{data?.height}</p>
                    </div>
                    <hr />

                    <div className="grid grid-cols-2 gap-1 text-sm text-zinc-700">
                        <p>Interested In</p>
                        <p>{data?.interestedIn}</p>
                    </div>
                    <hr />

                </CardContent>
            </Card>


        </div>
    )

}

export default UserDetails