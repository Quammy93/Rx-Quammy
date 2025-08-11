"use client"

import { useState, useEffect } from "react"
import type { Blog } from "@prisma/client"

export function useBlogPosts() {
  const [posts, setPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/blog")
      if (!response.ok) throw new Error("Failed to fetch posts")
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const createPost = async (postData: {
    title: string
    excerpt: string
    content: string
    category: string
    tags?: string[]
    published?: boolean
  }) => {
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      })

      if (!response.ok) throw new Error("Failed to create post")

      const newPost = await response.json()
      setPosts((prev) => [newPost, ...prev])
      return newPost
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "Failed to create post")
    }
  }

  const updatePost = async (id: string, updates: Partial<Blog>) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })

      if (!response.ok) throw new Error("Failed to update post")

      const updatedPost = await response.json()
      setPosts((prev) => prev.map((post) => (post.id === id ? updatedPost : post)))
      return updatedPost
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "Failed to update post")
    }
  }

  const deletePost = async (id: string) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete post")

      setPosts((prev) => prev.filter((post) => post.id !== id))
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "Failed to delete post")
    }
  }

  const likePost = async (id: string) => {
    try {
      const response = await fetch(`/api/blog/${id}/like`, {
        method: "POST",
      })

      if (!response.ok) throw new Error("Failed to like post")

      const { likes } = await response.json()
      setPosts((prev) => prev.map((post) => (post.id === id ? { ...post, likes } : post)))
      return likes
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "Failed to like post")
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    likePost,
    refetch: fetchPosts,
  }
}
