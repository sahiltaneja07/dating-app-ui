"use client"

import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "@tanstack/react-form";
import { useSendOtpQuery } from "@/hooks/use-auth";

const Login = () => {
    const form = useForm({
        defaultValues: {
            email: ""
        },
        onSubmit: ({ value }) => {
            if (!value) return;
        }
    });
    const router = useRouter();
    const {
        data,
        error,
        status,
    } = useSendOtpQuery(form.getFieldValue('email'))
    if (data?.status === 'success') {
        router.push(`login/otp?email=${form.getFieldValue('email')}`);
    }

    return (
        <div className="flex justify-center h-screen">
            <Card className="w-[400px] m-auto">
                <CardHeader>
                    <CardTitle className="text-xl">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}>
                        <form.Field name="email"
                            validators={{
                                onChange: ({ value }: any) => {
                                    if (!value) {
                                        return "Email is required"
                                    }
                                }
                            }}
                            children={(field) => (
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email" className="text-base">Email</Label>
                                    <Input type="text" name="email" value={field.state.value} onChange={e => field.handleChange(e.target.value)} />

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
                    <Button onClick={form.handleSubmit}>Next</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login;

