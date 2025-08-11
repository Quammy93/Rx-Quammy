// app/api/blog/[slug]/like/route.ts
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

// POST /api/blog/[slug]/like - Toggle like on post
export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const likes = await db.toggleLike(params.slug)
    return NextResponse.json({ likes })
  } catch (error) {
    return NextResponse.json({ error: "Failed to like post" }, { status: 500 })
  }
}
