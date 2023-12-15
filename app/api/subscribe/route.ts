// app/api/subscribe/route.ts

import * as z from "zod"

import { emailSchema } from "@/lib/validations/email"

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const parsedBody = emailSchema.parse(JSON.parse(body))
    const { email } = parsedBody

    if (!email) {
      return new Response(null, { status: 401 })
    }

    const mailChimpData = {
      members: [
        {
          email_address: email,
          status: "subscribed",
        },
      ],
    }

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID as string
    const URL = `https://us1.api.mailchimp.com/3.0/lists/${audienceId}`
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`,
      },
      body: JSON.stringify(mailChimpData),
    })

    const data = await response.json()

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Error in GET /api/subscribe:", error)
    return new Response(null, { status: 500 })
  }
}
