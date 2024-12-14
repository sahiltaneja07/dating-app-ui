import { getUser } from "@/lib/user-service"

const Recommendations = async () => {
    // const user = await getUser();

    return (
        <div className="flex items-stretch">
            <div className="flex items-stretch flex-col">
                <div className="flex-1">left side</div>
                <div className="flex-1" style={{ 'backgroundColor': 'blue' }}>right side</div>
            </div>
        </div>
    )
}

export default Recommendations