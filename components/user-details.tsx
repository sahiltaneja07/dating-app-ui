import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const UserDetails = ({ data }: any) => {
    const [api, setApi] = useState<CarouselApi>()

    return (
        <div className="flex gap-4 p-6 w-full">
            <Card className="w-2/5">
                <CardContent className="p-0">
                    <div className="bg-slate-400 relative">
                        <Carousel setApi={setApi} opts={{ loop: true }}>
                            <CarouselContent className="p-4">
                                {data?.photos?.map((photo: string) => (
                                    <CarouselItem key={photo} className="flex items-center justify-center w-full">
                                        <img src={photo} className="w-full" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        <div className="flex gap-2 justify-center p-2">
                            <Button variant="ghost" className="absolute top-1/2 left-1 hover:bg-white hover:bg-opacity-15 rounded-full" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
                            <Button variant="ghost" className="absolute top-1/2 right-1 hover:bg-white hover:bg-opacity-15 rounded-full" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
                        </div>
                    </div>

                </CardContent>
            </Card>

            <Card className="w-3/5">
                <CardContent>
                    <Carousel>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>

                                        {/* <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card> */}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                </CardContent>
            </Card>


        </div>
    )

}

export default UserDetails