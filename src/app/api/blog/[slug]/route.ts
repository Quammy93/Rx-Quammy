
// app/api/blog/[slug]/route.ts
import { prismaMongo } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const post = await prismaMongo.blog.findUnique({ where: { slug: params.slug } })
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  try {
    const updates = await req.json()
    const updated = await prismaMongo.blog.update({
      where: { slug: params.slug },
      data: updates
    })
    return NextResponse.json(updated)
  } catch (err: any) {
    console.error(err)
    if (err?.code === 'P2025') { // record not found
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}

export async function DELETE(_: Request, { params }: { params: { slug: string } }) {
  try {
    await prismaMongo.blog.delete({ where: { slug: params.slug } })
    return NextResponse.json({ message: 'Deleted' })
  } catch (err: any) {
    console.error(err)
    if (err?.code === 'P2025') return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}
