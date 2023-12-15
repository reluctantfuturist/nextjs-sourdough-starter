/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J3pCMdEP5iR
 */
"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export function EmailSignupForm() {
  const [emailInput, setEmailInput] = useState("")
  const [buttonLoading, setButtonLoading] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!emailInput) {
      return toast({
        description: "Email is required",
        variant: "destructive",
      })
    }

    setButtonLoading(true)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: emailInput }),
      })
      const data = await res.json()

      if (data.success) {
        toast({
          title: "Joined successfully.",
          description: "Thank you for joining the waitlist!",
        })
      } else {
        throw new Error(
          data?.error || "Something went wrong, please try again later"
        )
      }
    } catch (e) {
      toast({
        description: (e as Error).message,
        variant: "destructive",
      })
    }

    setEmailInput("")
    setButtonLoading(false)
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Sign up to get notified when we launch.
        </p>
        <Card className="w-full max-w-md p-6 space-y-2">
          <form className="flex flex-col space-y-2" onSubmit={handleFormSubmit}>
            <Input
              className="max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmailInput(e.target.value)
              }
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By subscribing, you agree to our
            <Link className="underline underline-offset-2" href="/terms">
              Terms & Conditions
            </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
