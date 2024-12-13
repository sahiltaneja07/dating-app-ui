import { getUser } from "@/utils/user-service"

const Recommendations = async () => {
    const user = await getUser();
    console.log(user);
    return (
        <div>Recommendations</div>
    )
}

export default Recommendations