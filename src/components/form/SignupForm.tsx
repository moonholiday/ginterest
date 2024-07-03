"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/validationSchema"
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SignupForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password
            })
        })

        if (response.ok) {
            router.push('/sign-in')
        }
        else {
            console.error("Registration failed")
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <Form {...form}>
            <div className="flex flex-col w-full p-16 items-center">
                <img src="/logo.png" className="max-w-16" />
                <h1 className="text-2xl font-semibold tracking-tight">Welcome to Ginterest</h1>
                <span className="tracking-tighter">Find new ideas to try</span>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-8 w-full gap-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email" className="text-black">Email</FormLabel>
                                <FormControl>
                                    <Input id="email" className="rounded-xl h-12 border-slate-400" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="password" className="text-black">Password</FormLabel>
                                <FormControl className="relative">
                                    <div>
                                        <Input id="password" autoComplete="new-password" type={passwordVisible ? "text" : "password"} className="rounded-xl h-12 border-slate-400" placeholder="Password" {...field} />
                                        <span onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                        >
                                            {passwordVisible ? <EyeClosedIcon /> : < EyeOpenIcon />}
                                        </span>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-red-600 rounded-xl h-12">Continue</Button>
                </form>
            </div>
        </Form>
    )
}

export default SignupForm
