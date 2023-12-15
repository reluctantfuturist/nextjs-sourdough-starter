// app/api/subscribe/route.ts

import type { NextApiRequest, NextApiResponse } from "next"
import * as z from "zod"

export const dynamic = "force-dynamic"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = JSON.parse(req.body)

    if (!email) {
      return res.status(401).json({ error: "Email is required" })
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
    // Error handling.
    if (data.errors[0]?.error) {
      return res.status(401).json({ error: data.errors[0].error })
    } else {
      return res.status(200).json({ success: true })
    }
  } catch (e) {
    console.error("Error in POST /api/subscribe:", e)
    return res
      .status(401)
      .json({ error: "Something went wrong, please try again later." })
  }
}
