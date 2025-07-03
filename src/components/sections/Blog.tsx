"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { blogPosts } from "@/lib/constants"
import { formatDate } from "@/lib/utils"

export function Blog() {
  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section id="blog" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div ref={ref}>
          <h2
            className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t("blog.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post, index }: { post: any; index: number }) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const { t } = useTranslation()

  return (
    <article
      ref={ref}
      className={`blog-card transition-all duration-700 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            Tutorial
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group"
        >
          {t("blog.readMore")}
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
