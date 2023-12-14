import * as React from "react"
import { SocialIcon } from "react-social-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex-grow  flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {" "}
          <img
            className="h-6 w-auto"
            src="/images/logo.svg"
            alt="SourdoughApp Logo"
          />{" "}
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              reluctantfuturist
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . Source on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 md:justify-end md:flex-shrink md:max-w-xs">
          <SocialIcon
            url={siteConfig.links.twitter}
            style={{ height: 20, width: 20 }}
          />
          <SocialIcon
            url={siteConfig.links.discord}
            style={{ height: 20, width: 20 }}
          />
          <ModeToggle />
        </div>
      </div>
    </footer>
  )
}
