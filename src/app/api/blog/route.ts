// app/api/blog/route.ts
import { prismaMongo } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      title,
      excerpt,
      content,
      category,
      image,
      date,
      readTime,
      author,
      tags = [],
      published = true
    } = body

    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    const generatedSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    const existing = await prismaMongo.blog.findUnique({ where: { slug: generatedSlug } })
    if (existing) {
      return NextResponse.json({ error: 'A post with this title/slug already exists' }, { status: 400 })
    }

    const newPost = await prismaMongo.blog.create({
      data: {
        title,
        excerpt,
        content,
        category,
        image,
        date: date ?? new Date().toISOString().split('T')[0],
        readTime: readTime ?? "3 min",
        slug: generatedSlug,
        author: author || "Unknown",
        tags,
        published,
        views: 0,
        likes: 0,
        comments: 0
      }
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const posts = await prismaMongo.blog.findMany({
      orderBy: { date: 'desc' }
    })
    return NextResponse.json(posts)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}
