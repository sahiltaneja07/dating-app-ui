import { getUser } from "@/lib/user-service"

const Recommendations = async () => {
    const user = await getUser();
    
    return (
        <div>Recommendations</div>
    )
}

export default Recommendations