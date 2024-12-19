import { CardContent } from "./ui/card"

const UserDetailCard = ({ data }: any) => {
    return (
        <CardContent className="flex flex-col gap-3 p-6" >
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
        </CardContent >
    )
}

export default UserDetailCard