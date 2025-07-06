import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'

const prisma = new PrismaClient()

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params?.slug // ✅ make sure it's defined

  if (!slug) return notFound()

  const post = await prisma.blog.findUnique({
    where: { slug }, // ✅ cleaner
  })

  if (!post) return notFound()

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString()} • {post.readTime}
      </p>
      <img
        src={post.image ?? '/placeholder.svg'}
        alt={post.title}
        className="w-full h-auto rounded-lg mb-8"
      />
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}
