"use client"

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useForm } from '@tanstack/react-form';

const LoginOTP = () => {
    const form = useForm({
        defaultValues: {
            otp: ""
        },
        onSubmit: ({ value }) => {
            console.log(value)
            // router.push('login/otp')
        }
    });

    // const router = useRouter();

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
            <Card className="w-[400px] m-auto">
                <CardHeader>
                    <CardTitle className="text-xl">OTP Verification</CardTitle>
                    <CardDescription className="text-sm">We have sent a verification code on your email</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}>
                        <form.Field name="otp"
                            validators={{
                                onSubmit: ({ value }: any) => {
                                    return !value
                                        ? 'OTP is required'
                                        : value.length < 6
                                            ? 'OTP must be 6 numbers'
                                            : undefined
                                }
                            }}
                            children={(field) => (
                                <div>
                                    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} value={field.state.value} onChange={e => field.handleChange(e)}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>

                                    {field.state.meta.errors && (
                                        <div className="text-red-500 text-sm">
                                            {field.state.meta.errors}
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                    </form>

                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={form.handleSubmit}>Login</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginOTP;

