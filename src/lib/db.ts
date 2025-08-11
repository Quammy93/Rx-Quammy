import { prismaMongo } from './prisma'

export const db = {
  getAllPosts: () => prismaMongo.blog.findMany(),

  createPost: (data: any) => prismaMongo.blog.create({ data }),

  toggleLike: async (slug: string) => {
    const post = await prismaMongo.blog.findUnique({ where: { slug } })
    if (!post) throw new Error("Post not found")

    const updated = await prismaMongo.blog.update({
      where: { slug },
      data: {
        likes: post.likes + 1, // or toggle logic if you track user likes
      },
    })

    return updated.likes
  },
}
