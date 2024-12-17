'use client'

import UserDetails from "@/components/user-details";
import UsersList from "@/components/users-list";
import { useState } from "react";

const LikesSent = () => {
    const users =
        [{
            userId: 1,
            name: 'XYZ Surname',
            location: 'Ostatnia 2D, Krakow',
            age: 30,
            bio: 'Part-time comedian, full-time foodie. I lift (pizza slices), binge-watch shows like its a sport, and never say no to road trips. Looking for someone to share laughs, adventures, and the last slice of pizza.',
            gender: 'Male',
            interests: ['Walking', 'Badminton', 'Cycling'],
            photos: ['https://picsum.photos/id/447/500.jpg', 'https://picsum.photos/id/453/500.jpg', 'https://picsum.photos/id/669/500.jpg'],
            height: "5'9",
            interestedIn: "Women",
            birthdate:"18/07/1992"
        }, {
            userId: 2,
            name: 'ABC Surname',
            location: 'Oswiecenia 47, Warsaw',
            age: 29,
            bio: 'Fluent in sarcasm, fueled by coffee, and always up for spontaneous adventures. Lover of sunsets, cozy nights, and bad puns. Let’s grab tacos and see if we vibe!',
            gender: 'Female',
            interests: ['Walking', 'Nothing', 'Running'],
            photos: ['https://picsum.photos/id/64/500.jpg', 'https://picsum.photos/id/325/500.jpg', 'https://picsum.photos/id/550/500.jpg', 'https://picsum.photos/id/646/500.jpg'],
            height: "5'5",
            interestedIn: "Men",
            birthdate:"17/06/1995"
        }, {
            userId: 3,
            name: 'GHI Surname',
            location: 'Noida, India',
            age: 22,
            bio: 'Part-time foodie, full-time meme enthusiast. I lift...pizza slices and occasionally weights. Big fan of road trips, good music, and bad jokes. Let’s laugh, explore, and see where this goes!',
            gender: 'Female',
            interests: ['Dancing', 'Walking', 'Sleeping'],
            photos: ['https://picsum.photos/id/338/500.jpg', 'https://picsum.photos/id/334/500.jpg', 'https://picsum.photos/id/349/500.jpg'],
            height: "5'4",
            interestedIn: "Everyone",
            birthdate:"18/07/1994"
        }];

    const [userDetails, setUserDetails] = useState(null)

    function handleCardClick(userData: any) {
        setUserDetails(userData)
    }

    return (
        <div className="flex gap-4 min-h-screen" >
            <div className="w-1/3 border-r">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 font-bold text-center">
                    Likes Sent
                </div>

                <div className="grid grid-cols-3 gap-3 mt-3 px-4">
                    {users.map((user) => (
                        <UsersList key={user.userId} data={user} onCardClick={handleCardClick} />
                    ))}
                </div>

            </div>

            <div className="w-2/3">
                <UserDetails data={userDetails} />
            </div>
        </div>
    )
}

export default LikesSent