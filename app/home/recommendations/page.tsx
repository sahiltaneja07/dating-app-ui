import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/user-service"
import { Heart, X } from "lucide-react";

const Recommendations = async () => {
    // const user = await getUser();

    const data = [{
        userId: 1,
        name: 'XYZ Surname',
        location: 'Ostatnia 2D, Krakow',
        age: 30,
        bio: 'Sare ga ma padha ni sa thus is my bios oiusjdio fkjoikj oikjas jkdfh  kjahk sjdfh kjashdf aksj fhjkshd fkjashdfjkhsjkdfh kj ajsk hs kdjk njksd nfjkas nvjkaf nvjakfd bnkajsdnkj snd',
        gender: 'M',
        interests: ['Walking', 'Badminton', 'Cycling'],
        photos: ['https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png', 'https://placebear.com/g/200/200', 'https://reactnative.dev/img/tiny_logo.png']
    }];

    return (
        <>
            {
                data.map(x =>
                    <div className="flex h-full" key={x.userId}>
                        <div className="flex-auto w-1/3 border-r">
                            <div className="w-full rounded-b-lg mb-4 h-80 bg-no-repeat bg-cover bg-center flex flex-col justify-end" style={{backgroundImage: `url(${x.photos[0]}), linear-gradient(#D3D3D3, #808080)`}}>
                                <div className="font-sans text-sm text-white mb-3 ml-3 mr-3 font-bold">
                                    <p>Marie 22</p>
                                    <p>About me oiojsd jhksdh osah i jd ja soidj iosjioa jdaoisjdoias jdio jdfbhddo iajfoajhvd</p>
                                </div>
                            </div>
                            <div className="flex justify-between ml-5 mr-5">
                                <Button variant={"outline"}>
                                    <X />
                                </Button>
                                <Button variant={"outline"}>
                                    <Heart />
                                </Button>
                            </div>
                        </div>
                        <div className="flex-auto w-2/3">right side</div>
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