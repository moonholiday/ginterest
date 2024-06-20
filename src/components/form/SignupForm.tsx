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

const SignupForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = () => {
        console.log("form submitted")
    }

    return (
        <Form {...form}>
            <div className="flex flex-col w-full p-16 items-center">
                <img src="/logo.png" className="max-w-16" />
                <h1 className="text-2xl font-semibold">Discover ideas just for you</h1>
                <span>Sign up to see more</span>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-8 w-full gap-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black">Email</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl h-12 border-slate-400" placeholder="Email" {...field} />
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
                                <FormLabel className="text-black">Password</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl h-12 border-slate-400" placeholder="Password" {...field} />
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
