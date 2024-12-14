import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const UsersList = ({ userData }: any) => {
    return (
        <Card>
            <CardContent>
                <div className="flex gap-4 items-center py-3 hover:bg-slate-200 hover:shadow-lg cursor-pointer">
                    <img
                        className="border rounded-full w-20 h-20"
                        src={userData.photos[0]}
                        alt="User image"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">{userData.name}, {userData.age}</span>
                        <span className="text-sm">{userData.location}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        // <div className="flex gap-4 items-center py-3 hover:bg-slate-200 hover:shadow-lg cursor-pointer">
        //     <img
        //         className="border rounded-full w-20 h-20"
        //         src={userData.photos[0]}
        //         alt="User image"
        //     />
        //     <div className="flex flex-col">
        //         <span className="font-bold">{userData.name}, {userData.age}</span>
        //         <span className="text-sm">{userData.location}</span>
        //     </div>
        // </div>
    )
}

export default UsersList