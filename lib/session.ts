import { User } from "@prisma/client"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getUserSubscriptionPlan } from "@/lib/subscription"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}

// Returns 500 if the current user has enough AI generations.
export async function verifyCurrentUserHasAiGenerations() {
  const session = await getServerSession(authOptions)
  const userId: string | undefined = session?.user?.id

  if (!userId) {
    throw new Error("User ID is undefined")
  }

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new Error("User not found")
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  if (
    user.aiGenerationsCount &&
    user.aiGenerationsCount >= subscriptionPlan?.aiGenerationsLimit
  ) {
    return new Response("AI Generations Limit Reached", { status: 402 })
  } else {
    return new Response("AI Generations Limit Not Reached", { status: 200 })
  }
}
