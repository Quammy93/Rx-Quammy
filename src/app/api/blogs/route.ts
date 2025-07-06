import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function GET() {
  try {
  const posts = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(posts)
} catch (error) {
  console.error('Error fetching blog posts:', error)
  return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
}
}
