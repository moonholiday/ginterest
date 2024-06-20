"use client"
import { z } from 'zod';

export const formSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Email must be a valid email' }),
    password: z.string().min(1, { message: 'Password is required' }).min(8, { message: 'Password must be at least 8 characters' }),
});
