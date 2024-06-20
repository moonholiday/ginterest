import { z } from 'zod';

export const formSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({ message: "Hmm...that doesn't look line an email address" }),
    password: z.string().min(1, { message: 'Password is required' }).min(8, { message: "The Password you entered is incorrect. Try again" }),
});
