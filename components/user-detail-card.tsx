import { CardContent } from "./ui/card"

const UserDetailCard = ({ data }: any) => {
    return (
        <CardContent className="flex flex-col gap-2 p-6" >
            <h1 className="text-xl font-semibold">Details</h1>
            <span className="text-zinc-700 flex-1">{data?.bio}</span>
            <hr className="border-zinc-300" />
            <div className="grid grid-cols-2 gap-1 text-sm text-zinc-700">
                <p>Height</p>
                <p>{data?.height}</p>
            </div>
            <hr className="border-zinc-300" />

            <div className="grid grid-cols-2 gap-1 text-sm text-zinc-700">
                <p>Interested In</p>
                <p>{data?.interestedIn}</p>
            </div>
            <hr className="border-zinc-300" />
        </CardContent >
    )
}

export default UserDetailCard