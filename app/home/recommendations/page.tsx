'use client'

import { Card } from "@/components/ui/card";
import UserActionCard from "@/components/user-action-card";
import UserDetailCard from "@/components/user-detail-card";
import { useRecommendationQuery } from "@/hooks/use-user";

const Recommendations = () => {

    const {data, error} = useRecommendationQuery();
    // console.log(data, error);
    // const data = [{
    //     userId: 1,
    //     name: 'XYZ Surname',
    //     email: 'xyz.surname@gmail.com',
    //     location: 'Ostatnia 2D, Krakow',
    //     age: 30,
    //     languagesKnown: ['English', 'Hindi'],
    //     jobTitle: 'Software Engineer',
    //     drink: 'Yes',
    //     smoke: 'No',
    //     tags: ['movies', 'cycling', 'sports', 'parties', 'extrovert', 'introvert', 'running', 'book reading'],
    //     datingIntention: "Long term",
    //     bio: 'Part-time comedian, full-time foodie. I lift (pizza slices), binge-watch shows like its a sport, and never say no to road trips. Looking for someone to share laughs, adventures, and the last slice of pizza.',
    //     gender: 'Male',
    //     interests: ['Walking', 'Badminton', 'Cycling'],
    //     photos: ['https://picsum.photos/id/447/500.jpg', 'https://picsum.photos/id/453/500.jpg', 'https://picsum.photos/id/669/500.jpg'],
    //     height: "5'9",
    //     interestedIn: ["Women"],
    //     dob: "18/07/1992"
    // }];

    return (
        <>
            {
                data?.data.users?.map((x: any) =>
                    <div className="flex h-full" key={x._id}>
                        <div className="flex-auto w-1/3">
                            <div className="flex gap-4 px-6 pt-4 w-full h-full pb-16">
                                <Card className="flex-auto h-[calc(100vh_-_88px)]">
                                    <UserActionCard data={x} />
                                </Card>
                            </div>
                        </div>
                        <div className="flex-auto w-2/3">
                            <Card className="flex-auto overflow-y-auto h-[calc(100vh_-_88px)] mt-4 mb-4 mr-6">
                                <UserDetailCard data={x} />
                            </Card>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Recommendations






// , {
//     userId: 2,
//     name: 'ABC Surname',
//     location: 'Oswiecenia 47, Warsaw',
//     age: 29,
//     bio: 'Lorem ipsum so la ti do jksaddklas dlkjasd aflkj lkjs lkdsdfj alksjf sdklfjl kdsjf slkdjf slkdjf sldkjf lskdj flskdjf slkdf jsdlkf jsdlkf jsdlk fjsdlkj flksd jflks jdflk sjdflk jslks',
//     gender: 'F',
//     interests: ['Walking', 'Nothing', 'Running'],
//     photos: ['https://www.kasandbox.org/programming-images/avatars/spunky-sam.png', 'https://www.kasandbox.org/programming-images/avatars/old-spice-man.png', 'https://pixabay.com/get/gb8a687d555ef22f4f3fcd920f9cefab6935ee9eb5a6da842537525027deb2464686875b31f8e1943f48d6949a936c0f34d406ae7f25c908d0d3cf5fa65a8c17f2079131715fca79ca908cd593019193e_640.jpg']
// }, {
//     userId: 3,
//     name: 'GHI Surname',
//     location: 'Noida, India',
//     age: 22,
//     bio: 'Ae ji Oj lo ji suno ji slkjdf lksdj flksdjf klsdj fklsdj fklsd jfkls djfklsd jflks jgklfd hlskdjf oapifpoafiopfigop sdifposd fiops idfops idfpipoi poi po iop ipo ip iuj poi',
//     gender: 'F',
//     interests: ['Dancing', 'Walking', 'Sleeping'],
//     photos: ['https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png', 'https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png', 'https://pixabay.com/get/gb8a687d555ef22f4f3fcd920f9cefab6935ee9eb5a6da842537525027deb2464686875b31f8e1943f48d6949a936c0f34d406ae7f25c908d0d3cf5fa65a8c17f2079131715fca79ca908cd593019193e_640.jpg']
// }