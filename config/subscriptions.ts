// To do: update

import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description: "Upgrade to a paid plan for access to Sourdough features.",
  stripePriceId: "",
  aiGenerationsLimit: 0,
}

export const proPlan: SubscriptionPlan = {
  name: "Personal",
  description: "The Personal plan gives you unlimited access to all features.",
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
  aiGenerationsLimit: 300,
}
