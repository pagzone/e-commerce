"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Label } from "../ui/label"

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password : z.string().min(8, {
        message: "Password must be at least 8 characters.",
    })
})
   
export const LoginForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })
     
      const onSubmit = (values: z.infer<typeof formSchema>) => {

        console.log(values)
      }

    return(
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-96 p-8 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-gray-700">Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
      
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="accent-purple-500" />
                <Label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </Label>
              </div>
              <Link href="/" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
      
          <div className="space-y-2">
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Submit
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/user/register" className="text-purple-600 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </Form>
      
    );
}   