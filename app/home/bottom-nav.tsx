import { HandHeart, Heart, Sparkles, UserRound, Wand } from "lucide-react";
import Link from "next/link";

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-12 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <Link href="/home/recommendations" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Wand className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                </Link >
                <Link href="/home/likes-received" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Heart className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                </Link>
                <Link href="/home/matches" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Sparkles className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                </Link>
                <Link href="/home/likes-sent" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <HandHeart className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                </Link>
                <Link href="/home/profile" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <UserRound className="group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                </Link>
            </div>
        </div>
    )
}

export default BottomNav