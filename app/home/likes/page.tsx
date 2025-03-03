'use client'

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserActionCard from "@/components/user-action-card";
import UserDetailCard from "@/components/user-detail-card";
import UsersList from "@/components/users-list";
import { useState } from "react";

const Likes = () => {
    const [userDetails, setUserDetails] = useState(null)

    const likesSentUsersList =
        [{
            userId: 1,
            name: 'John Doe',
            location: 'Ostatnia 2D, Krakow',
            age: 30,
            bio: 'Part-time comedian, full-time foodie. I lift (pizza slices), binge-watch shows like its a sport, and never say no to road trips. Looking for someone to share laughs, adventures, and the last slice of pizza.',
            gender: 'Male',
            interests: ['Walking', 'Badminton', 'Cycling'],
            photos: ['https://picsum.photos/id/447/500.jpg', 'https://picsum.photos/id/453/500.jpg', 'https://picsum.photos/id/669/500.jpg'],
            height: "5'9",
            interestedIn: "Women",
            dob: "18/07/1992"
        }, {
            userId: 2,
            name: 'Annie Wer',
            location: 'Oswiecenia 47, Warsaw',
            age: 29,
            bio: 'Fluent in sarcasm, fueled by coffee, and always up for spontaneous adventures. Lover of sunsets, cozy nights, and bad puns. Let’s grab tacos and see if we vibe!',
            gender: 'Female',
            interests: ['Walking', 'Nothing', 'Running'],
            photos: ['https://picsum.photos/id/64/500.jpg', 'https://picsum.photos/id/325/500.jpg', 'https://picsum.photos/id/550/500.jpg', 'https://picsum.photos/id/646/500.jpg'],
            height: "5'5",
            interestedIn: "Men",
            dob: "17/06/1995"
        }, {
            userId: 3,
            name: 'Kevin Lee',
            location: 'Noida, India',
            age: 22,
            bio: 'Part-time foodie, full-time meme enthusiast. I lift...pizza slices and occasionally weights. Big fan of road trips, good music, and bad jokes. Let’s laugh, explore, and see where this goes!',
            gender: 'Male',
            interests: ['Dancing', 'Walking', 'Sleeping'],
            photos: ['https://picsum.photos/id/338/500.jpg', 'https://picsum.photos/id/334/500.jpg', 'https://picsum.photos/id/349/500.jpg'],
            height: "5'4",
            interestedIn: "Everyone",
            dob: "18/07/1994"
        }];

    const likesReceivedUsersList =
        [{
            userId: 2,
            name: 'Annie Wer',
            location: 'Oswiecenia 47, Warsaw',
            age: 29,
            bio: 'Fluent in sarcasm, fueled by coffee, and always up for spontaneous adventures. Lover of sunsets, cozy nights, and bad puns. Let’s grab tacos and see if we vibe!',
            gender: 'Female',
            interests: ['Walking', 'Nothing', 'Running'],
            photos: ['https://picsum.photos/id/64/500.jpg', 'https://picsum.photos/id/325/500.jpg', 'https://picsum.photos/id/550/500.jpg', 'https://picsum.photos/id/646/500.jpg'],
            height: "5'5",
            interestedIn: "Men",
            dob: "17/06/1995"
        },
        {
            userId: 3,
            name: 'Kevin Lee',
            location: 'Noida, India',
            age: 22,
            bio: 'Part-time foodie, full-time meme enthusiast. I lift...pizza slices and occasionally weights. Big fan of road trips, good music, and bad jokes. Let’s laugh, explore, and see where this goes!',
            gender: 'Male',
            interests: ['Dancing', 'Walking', 'Sleeping'],
            photos: ['https://picsum.photos/id/338/500.jpg', 'https://picsum.photos/id/334/500.jpg', 'https://picsum.photos/id/349/500.jpg'],
            height: "5'4",
            interestedIn: "Everyone",
            dob: "18/07/1994"
        },
        {
            userId: 1,
            name: 'John Doe',
            location: 'Ostatnia 2D, Krakow',
            age: 30,
            bio: 'Part-time comedian, full-time foodie. I lift (pizza slices), binge-watch shows like its a sport, and never say no to road trips. Looking for someone to share laughs, adventures, and the last slice of pizza.',
            gender: 'Male',
            interests: ['Walking', 'Badminton', 'Cycling'],
            photos: ['https://picsum.photos/id/447/500.jpg', 'https://picsum.photos/id/453/500.jpg', 'https://picsum.photos/id/669/500.jpg'],
            height: "5'9",
            interestedIn: "Women",
            dob: "18/07/1992"
        }];

    function handleCardClick(userData: any) {
        setUserDetails(userData)
    }

    function onTabChange(value: string) {
        setUserDetails(null)
        if (value === 'sent') {
            // api call for likes sent
        } else if (value === 'received') {
            // api call for likes received
        }
    }

    return (
        <div className="flex gap-4 min-h-screen" >
            <div className="w-1/3 border-r">
                <Tabs defaultValue="sent" className="flex flex-col p-4" onValueChange={onTabChange}>
                    <TabsList className="grid grid-cols-2 bg-gray-200 w-fit self-center">
                        <TabsTrigger value="sent">Sent</TabsTrigger>
                        <TabsTrigger value="received">Received</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sent">
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {likesSentUsersList.map((user) => (
                                <UsersList key={user.userId} data={user} onCardClick={handleCardClick} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="received">
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {likesReceivedUsersList.map((user) => (
                                <UsersList key={user.userId} data={user} onCardClick={handleCardClick} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="w-2/3">
                {!userDetails ? (
                    <div className="flex justify-center items-center p-6 w-full h-full text-zinc-400 text-lg">Click on user card to see the details</div>
                ) : (
                    <div className="flex gap-4 px-6 pt-4 w-full h-full pb-16">
                        <Card className="w-2/5 flex-auto h-[calc(100vh_-_88px)]">
                            <UserActionCard data={userDetails} />
                        </Card>

                        <Card className="w-3/5 flex-auto overflow-y-auto h-[calc(100vh_-_88px)]">
                            <UserDetailCard data={userDetails} />
                        </Card>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Likes