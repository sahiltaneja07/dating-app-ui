"use client"

import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Login = () => {
    const router = useRouter();
    function handleClick() {

        // const response = await fetch('/api/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password }),
        // })

        // if (response.ok) {
        //     router.push('/recommendations')
        // } else {
        //     // Handle errors
        // }
    }

    return (
        <div className="flex justify-center h-screen">
            <Card className="w-[380px] m-auto">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" name="email" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleClick}>Next</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login;

