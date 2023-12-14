import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Personal</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 1
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 2
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 3
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 4
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$29</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="relative grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] opacity-50">
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-center w-full h-full flex items-center justify-center z-10">
          <span className="text-2xl font-extrabold">Coming Soon</span>
        </div>
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Pro</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 1
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 2
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 3
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 4
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 5
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Feature 6
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$99</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "pointer-events-none"
            )}
          >
            Get Started
          </Link>
        </div>
      </div>{" "}
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Paid access is in testing right now.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  )
}
