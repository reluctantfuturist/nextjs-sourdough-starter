// plans/page.tsx
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { BillingForm } from "@/components/billing-form"

export default async function SelectPlanPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
    return
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)
  if (subscriptionPlan.isPro) {
    redirect("/dashboard")
    return
  }

  return (
    <div>
      <BillingForm subscriptionPlan={subscriptionPlan} userId={user.id} />
    </div>
  )
}
