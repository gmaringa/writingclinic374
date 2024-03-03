import { Webhook } from "svix";
import { headers } from "next/headers";
import { createOrUpdateUser } from "../../../lib/controllers/user.controller.js";

import { NextResponse } from "next/server"
import { Webhook } from "svix"

const webhookSecret = process.env.WEBHOOK_SECRET || ""

async function handler(request) {
  const payload = await request.json()
  const headersList = headers()
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature")
  }
  const wh = new Webhook(webhookSecret)
  let evt = null

  try {
    evt = wh.verify(JSON.stringify(payload), heads)
  } catch (err) {
    console.error(err.message)
    return NextResponse.json({}, { status: 400 })
  }

  // Handle the event
  const eventType = evt?.type;

  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, first_name, last_name, image_url, email_addresses, username } =
      evt?.data;

    try {
      await createOrUpdateUser(
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username
      );

      return new Response("User is created or updated", {
        status: 200,
      });
    } catch (err) {
      console.error("Error creating or updating user:", err);
      return new Response("Error occured", {
        status: 500,
      });
    }
  }

  if (eventType === "user.deleted") {
    try {
      const { id } = evt?.data;
      await deleteUser(id);

      return new Response("User is deleted", {
        status: 200,
      });
    } catch (err) {
      console.error("Error deleting user:", err);
      return new Response("Error occured", {
        status: 500,
      });
    }
  }
}

export const GET = handler
export const POST = handler
export const PUT = handler
