import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response(null, { status: 403 })
    }

    return new Response(
      JSON.stringify({ userId: session.user.id, image: session.user.image }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error("Error in GET /api/users:", error)
    return new Response(null, { status: 500 })
  }
}
