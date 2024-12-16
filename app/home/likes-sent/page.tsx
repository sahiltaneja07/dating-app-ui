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
            bio: 'Sare ga ma padha ni sa thus is my bios oiusjdio fkjoikj oikjas jkdfh  kjahk sjdfh kjashdf aksj fhjkshd fkjashdfjkhsjkdfh kj ajsk hs kdjk njksd nfjkas nvjkaf nvjakfd bnkajsdnkj snd',
            gender: 'M',
            interests: ['Walking', 'Badminton', 'Cycling'],
            photos: ['https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png', 'https://placebear.com/g/200/200', 'https://reactnative.dev/img/tiny_logo.png']
        }, {
            userId: 2,
            name: 'ABC Surname',
            location: 'Oswiecenia 47, Warsaw',
            age: 29,
            bio: 'Lorem ipsum so la ti do jksaddklas dlkjasd aflkj lkjs lkdsdfj alksjf sdklfjl kdsjf slkdjf slkdjf sldkjf lskdj flskdjf slkdf jsdlkf jsdlkf jsdlk fjsdlkj flksd jflks jdflk sjdflk jslks',
            gender: 'F',
            interests: ['Walking', 'Nothing', 'Running'],
            photos: ['https://www.kasandbox.org/programming-images/avatars/spunky-sam.png', 'https://www.kasandbox.org/programming-images/avatars/old-spice-man.png', 'https://pixabay.com/get/gb8a687d555ef22f4f3fcd920f9cefab6935ee9eb5a6da842537525027deb2464686875b31f8e1943f48d6949a936c0f34d406ae7f25c908d0d3cf5fa65a8c17f2079131715fca79ca908cd593019193e_640.jpg']
        }, {
            userId: 3,
            name: 'GHI Surname',
            location: 'Noida, India',
            age: 22,
            bio: 'Ae ji Oj lo ji suno ji slkjdf lksdj flksdjf klsdj fklsdj fklsd jfkls djfklsd jflks jgklfd hlskdjf oapifpoafiopfigop sdifposd fiops idfops idfpipoi poi po iop ipo ip iuj poi',
            gender: 'F',
            interests: ['Dancing', 'Walking', 'Sleeping'],
            photos: ['https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png', 'https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png', 'https://pixabay.com/get/gb8a687d555ef22f4f3fcd920f9cefab6935ee9eb5a6da842537525027deb2464686875b31f8e1943f48d6949a936c0f34d406ae7f25c908d0d3cf5fa65a8c17f2079131715fca79ca908cd593019193e_640.jpg']
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