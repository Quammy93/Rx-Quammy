// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Calendar, Clock, ArrowRight, Plus, Eye, MessageCircle, Heart, X, Edit, Trash2, Share2, Twitter, Facebook, Linkedin, Copy, Save, AlertCircle, CheckCircle, Tag } from 'lucide-react'
// import { useTranslation } from "@/hooks/useTranslation"
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
// import { useBlogPosts } from "@/hooks/useBlogPosts"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/Textarea"
// import { formatDate } from "@/lib/utils"
// import { socialShare } from "@/lib/socialShare"
// import type { BlogPost } from "@/lib/db"

// export function BlogManager() {
//   const { t } = useTranslation()
//   const { ref, isIntersecting } = useIntersectionObserver()
//   const { posts, loading, error, createPost, updatePost, deletePost, likePost } = useBlogPosts()

//   const [showAddModal, setShowAddModal] = useState(false)
//   const [showEditModal, setShowEditModal] = useState(false)
//   const [showShareModal, setShowShareModal] = useState(false)
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

//   const [formData, setFormData] = useState({
//     title: "",
//     category: "Technology",
//     excerpt: "",
//     content: "",
//     tags: "",
//     published: true,
//   })

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       category: "Technology",
//       excerpt: "",
//       content: "",
//       tags: "",
//       published: true,
//     })
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//     }))
//   }

//   const handleCreatePost = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitMessage(null)

//     try {
//       await createPost({
//         ...formData,
//         tags: formData.tags
//           .split(",")
//           .map((tag) => tag.trim())
//           .filter(Boolean),
//       })

//       setSubmitMessage({ type: "success", text: "Post created successfully!" })
//       resetForm()
//       setTimeout(() => {
//         setShowAddModal(false)
//         setSubmitMessage(null)
//       }, 2000)
//     } catch (err) {
//       setSubmitMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to create post" })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleEditPost = (post: BlogPost) => {
//     setSelectedPost(post)
//     setFormData({
//       title: post.title,
//       category: post.category,
//       excerpt: post.excerpt,
//       content: post.content,
//       tags: post.tags.join(", "),
//       published: post.published,
//     })
//     setShowEditModal(true)
//   }

//   const handleUpdatePost = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!selectedPost) return

//     setIsSubmitting(true)
//     setSubmitMessage(null)

//     try {
//       await updatePost(selectedPost.id, {
//         ...formData,
//         tags: formData.tags
//           .split(",")
//           .map((tag) => tag.trim())
//           .filter(Boolean),
//       })

//       setSubmitMessage({ type: "success", text: "Post updated successfully!" })
//       setTimeout(() => {
//         setShowEditModal(false)
//         setSubmitMessage(null)
//         setSelectedPost(null)
//       }, 2000)
//     } catch (err) {
//       setSubmitMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to update post" })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleDeletePost = async (post: BlogPost) => {
//     if (!confirm(`Are you sure you want to delete "${post.title}"?`)) return

//     try {
//       await deletePost(post.id)
//       setSubmitMessage({ type: "success", text: "Post deleted successfully!" })
//       setTimeout(() => setSubmitMessage(null), 3000)
//     } catch (err) {
//       setSubmitMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to delete post" })
//     }
//   }

//   const handleSharePost = (post: BlogPost) => {
//     setSelectedPost(post)
//     setShowShareModal(true)
//   }

//   const handleSocialShare = (platform: string) => {
//     if (!selectedPost) return

//     const shareData = {
//       title: selectedPost.title,
//       excerpt: selectedPost.excerpt,
//       url: `${window.location.origin}/blog/${selectedPost.slug}`,
//       hashtags: selectedPost.tags,
//     }

//     let shareUrl = ""

//     switch (platform) {
//       case "twitter":
//         shareUrl = socialShare.twitter(shareData)
//         break
//       case "facebook":
//         shareUrl = socialShare.facebook(shareData)
//         break
//       case "linkedin":
//         shareUrl = socialShare.linkedin(shareData)
//         break
//       case "copy":
//         socialShare.copyToClipboard(shareData).then((success) => {
//           if (success) {
//             setSubmitMessage({ type: "success", text: "Link copied to clipboard!" })
//             setTimeout(() => setSubmitMessage(null), 3000)
//           }
//         })
//         return
//     }

//     if (shareUrl) {
//       window.open(shareUrl, "_blank", "width=600,height=400")
//     }
//   }

//   const handleLikePost = async (post: BlogPost) => {
//     try {
//       await likePost(post.id)
//     } catch (err) {
//       console.error("Failed to like post:", err)
//     }
//   }

//   if (loading) {
//     return (
//       <section id="blog" className="py-16 px-4 bg-white/50">
//         <div className="container mx-auto text-center">
//           <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading blog posts...</p>
//         </div>
//       </section>
//     )
//   }

//   if (error) {
//     return (
//       <section id="blog" className="py-16 px-4 bg-white/50">
//         <div className="container mx-auto text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <AlertCircle className="w-8 h-8 text-red-500" />
//           </div>
//           <p className="text-red-600 text-lg">Error: {error}</p>
//         </div>
//       </section>
//     )
//   }

//   const latestPost = posts[0]
//   const otherPosts = posts.slice(1)

//   return (
//     <>
//       <section id="blog" className="py-16 px-4 bg-white/50">
//         <div className="container mx-auto">
//           {/* Success/Error Messages */}
//           {submitMessage && (
//             <div
//               className={`fixed top-24 right-4 z-50 p-4 rounded-xl shadow-xl backdrop-blur-sm border ${
//                 submitMessage.type === "success"
//                   ? "bg-green-50/90 text-green-800 border-green-200"
//                   : "bg-red-50/90 text-red-800 border-red-200"
//               }`}
//             >
//               <div className="flex items-center">
//                 {submitMessage.type === "success" ? (
//                   <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//                 ) : (
//                   <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//                 )}
//                 <span className="font-medium">{submitMessage.text}</span>
//               </div>
//             </div>
//           )}

//           <div ref={ref}>
//             <h2
//               className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//             >
//               {t("blog.title")}
//             </h2>
//             <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Insights, tutorials, and thoughts on web development, design, and technology trends.
//             </p>
//           </div>

//           {/* Admin Controls */}
//           <div className="flex justify-center mb-12">
//             <button
//               onClick={() => setShowAddModal(true)}
//               className="btn-primary inline-flex items-center gap-2"
//             >
//               <Plus className="w-5 h-5" />
//               Create New Post
//             </button>
//           </div>

//           {posts.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Plus className="w-12 h-12 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">No blog posts yet</h3>
//               <p className="text-gray-500 mb-6">Create your first post to get started!</p>
//               <button
//                 onClick={() => setShowAddModal(true)}
//                 className="btn-primary"
//               >
//                 Create Your First Post
//               </button>
//             </div>
//           ) : (
//             <>
//               {/* Latest Post */}
//               {latestPost && (
//                 <div className="mb-16">
//                   <div className="flex items-center justify-between mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900">Latest Post</h3>
//                   </div>
//                   <BlogPostCard
//                     post={latestPost}
//                     featured
//                     onEdit={handleEditPost}
//                     onDelete={handleDeletePost}
//                     onShare={handleSharePost}
//                     onLike={handleLikePost}
//                   />
//                 </div>
//               )}

//               {/* Other Posts */}
//               {otherPosts.length > 0 && (
//                 <div>
//                   <div className="flex items-center justify-between mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900">More Articles</h3>
//                     <button className="text-primary-600 hover:text-secondary-600 transition-colors font-medium">
//                       View All Posts →
//                     </button>
//                   </div>
//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {otherPosts.map((post, index) => (
//                       <BlogPostCard
//                         key={post.id}
//                         post={post}
//                         index={index}
//                         onEdit={handleEditPost}
//                         onDelete={handleDeletePost}
//                         onShare={handleSharePost}
//                         onLike={handleLikePost}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* View All Posts Button */}
//               <div className="text-center mt-12">
//                 <button className="btn-primary inline-flex items-center gap-2">
//                   Explore All Posts
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Create Post Modal */}
//       {showAddModal && (
//         <PostModal
//           title="Create New Post"
//           formData={formData}
//           onInputChange={handleInputChange}
//           onSubmit={handleCreatePost}
//           onClose={() => {
//             setShowAddModal(false)
//             resetForm()
//             setSubmitMessage(null)
//           }}
//           isSubmitting={isSubmitting}
//           submitMessage={submitMessage}
//         />
//       )}

//       {/* Edit Post Modal */}
//       {showEditModal && selectedPost && (
//         <PostModal
//           title="Edit Post"
//           formData={formData}
//           onInputChange={handleInputChange}
//           onSubmit={handleUpdatePost}
//           onClose={() => {
//             setShowEditModal(false)
//             setSelectedPost(null)
//             resetForm()
//             setSubmitMessage(null)
//           }}
//           isSubmitting={isSubmitting}
//           submitMessage={submitMessage}
//         />
//       )}

//       {/* Share Modal */}
//       {showShareModal && selectedPost && (
//         <ShareModal
//           post={selectedPost}
//           onShare={handleSocialShare}
//           onClose={() => {
//             setShowShareModal(false)
//             setSelectedPost(null)
//           }}
//         />
//       )}
//     </>
//   )
// }

// // Blog Post Card Component
// function BlogPostCard({
//   post,
//   featured = false,
//   index = 0,
//   onEdit,
//   onDelete,
//   onShare,
//   onLike,
// }: {
//   post: BlogPost
//   featured?: boolean
//   index?: number
//   onEdit: (post: BlogPost) => void
//   onDelete: (post: BlogPost) => void
//   onShare: (post: BlogPost) => void
//   onLike: (post: BlogPost) => void
// }) {
//   const { ref, isIntersecting } = useIntersectionObserver()

//   if (featured) {
//     return (
//       <div className="blog-card">
//         <div className="grid lg:grid-cols-2 gap-0">
//           {/* Image Section */}
//           <div className="relative overflow-hidden">
//             <div className="w-full h-64 lg:h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
//               <span className="text-primary-600 font-semibold">Featured Post Image</span>
//             </div>
//             <div className="absolute top-4 left-4 flex gap-2">
//               <span className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
//                 <Tag className="w-3 h-3 mr-1" />
//                 Featured
//               </span>
//               {!post.published && (
//                 <span className="inline-flex items-center px-3 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full">
//                   Draft
//                 </span>
//               )}
//             </div>

//             {/* Overlay with stats */}
//             <div className="absolute bottom-4 left-4 right-4">
//               <div className="flex items-center gap-4 text-white text-sm">
//                 <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                   <Eye className="w-4 h-4" />
//                   <span>{post.views}</span>
//                 </div>
//                 <button
//                   onClick={() => onLike(post)}
//                   className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded hover:bg-black/40 transition-colors"
//                 >
//                   <Heart className="w-4 h-4" />
//                   <span>{post.likes}</span>
//                 </button>
//                 <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                   <MessageCircle className="w-4 h-4" />
//                   <span>{post.comments}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="p-8 lg:p-12 flex flex-col justify-center">
//             <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//               <div className="flex items-center gap-1">
//                 <Calendar className="w-4 h-4" />
//                 <span>{formatDate(post.date)}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Clock className="w-4 h-4" />
//                 <span>{post.readTime}</span>
//               </div>
//             </div>

//             <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 hover:text-primary-600 transition-colors">
//               {post.title}
//             </h3>

//             <p className="text-gray-600 mb-6 text-lg leading-relaxed">{post.excerpt}</p>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {post.tags.slice(0, 3).map((tag) => (
//                 <span key={tag} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => onEdit(post)}
//                   className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                   title="Edit post"
//                 >
//                   <Edit className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => onShare(post)}
//                   className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
//                   title="Share post"
//                 >
//                   <Share2 className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => onDelete(post)}
//                   className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                   title="Delete post"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </div>

//               <button className="text-primary-600 font-semibold hover:text-secondary-600 transition-colors group text-lg">
//                 Read More
//                 <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <article
//       ref={ref}
//       className={`blog-card transition-all duration-500 ${
//         isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//       style={{ transitionDelay: `${index * 100}ms` }}
//     >
//       <div className="relative overflow-hidden">
//         <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-accent-100 flex items-center justify-center">
//           <span className="text-secondary-600 font-medium">Blog Post Image</span>
//         </div>
//         <div className="absolute top-4 left-4 flex gap-2">
//           <span className="inline-flex items-center px-3 py-1 bg-secondary-600 text-white text-xs font-medium rounded-full">
//             <Tag className="w-3 h-3 mr-1" />
//             {post.category}
//           </span>
//           {!post.published && (
//             <span className="inline-flex items-center px-3 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full">
//               Draft
//             </span>
//           )}
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//           <div className="flex items-center gap-1">
//             <Calendar className="w-4 h-4" />
//             <span>{formatDate(post.date)}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             <span>{post.readTime}</span>
//           </div>
//         </div>

//         <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {post.tags.slice(0, 2).map((tag) => (
//             <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-4 text-sm text-gray-500">
//             <div className="flex items-center gap-1">
//               <Eye className="w-4 h-4" />
//               <span>{post.views}</span>
//             </div>
//             <button
//               onClick={() => onLike(post)}
//               className="flex items-center gap-1 hover:text-red-500 transition-colors"
//             >
//               <Heart className="w-4 h-4" />
//               <span>{post.likes}</span>
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => onEdit(post)}
//               className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//               title="Edit post"
//             >
//               <Edit className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => onShare(post)}
//               className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
//               title="Share post"
//             >
//               <Share2 className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => onDelete(post)}
//               className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//               title="Delete post"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>

//           <button className="text-primary-600 hover:text-secondary-600 transition-colors font-medium group">
//             Read More 
//             <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </article>
//   )
// }

// // Post Modal Component
// function PostModal({
//   title,
//   formData,
//   onInputChange,
//   onSubmit,
//   onClose,
//   isSubmitting,
//   submitMessage,
// }: {
//   title: string
//   formData: any
//   onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
//   onSubmit: (e: React.FormEvent) => void
//   onClose: () => void
//   isSubmitting: boolean
//   submitMessage: { type: "success" | "error"; text: string } | null
// }) {
//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
//             <button 
//               onClick={onClose} 
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <form onSubmit={onSubmit} className="p-6 space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
//               <Input
//                 name="title"
//                 value={formData.title}
//                 onChange={onInputChange}
//                 placeholder="Enter post title..."
//                 required
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={onInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
//                 required
//               >
//                 <option value="Technology">Technology</option>
//                 <option value="React">React</option>
//                 <option value="JavaScript">JavaScript</option>
//                 <option value="Tutorial">Tutorial</option>
//                 <option value="Tips">Tips</option>
//                 <option value="News">News</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
//             <Input
//               name="tags"
//               value={formData.tags}
//               onChange={onInputChange}
//               placeholder="Enter tags separated by commas..."
//               className="w-full"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
//             <Textarea
//               name="excerpt"
//               value={formData.excerpt}
//               onChange={onInputChange}
//               rows={3}
//               placeholder="Brief description of your post..."
//               required
//               className="w-full"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
//             <Textarea
//               name="content"
//               value={formData.content}
//               onChange={onInputChange}
//               rows={12}
//               placeholder="Write your post content here..."
//               required
//               className="w-full"
//             />
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="published"
//               name="published"
//               checked={formData.published}
//               onChange={onInputChange}
//               className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
//             />
//             <label htmlFor="published" className="ml-2 text-sm text-gray-700">
//               Publish immediately
//             </label>
//           </div>

//           {submitMessage && (
//             <div
//               className={`p-4 rounded-lg border ${
//                 submitMessage.type === "success"
//                   ? "bg-green-50 text-green-800 border-green-200"
//                   : "bg-red-50 text-red-800 border-red-200"
//               }`}
//             >
//               <div className="flex items-center">
//                 {submitMessage.type === "success" ? (
//                   <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//                 ) : (
//                   <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//                 )}
//                 <span className="font-medium">{submitMessage.text}</span>
//               </div>
//             </div>
//           )}

//           <div className="flex gap-4 pt-4">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                   Saving...
//                 </>
//               ) : (
//                 <>
//                   <Save className="w-4 h-4 mr-2" />
//                   {title.includes("Create") ? "Create Post" : "Update Post"}
//                 </>
//               )}
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="btn-secondary px-6"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// // Share Modal Component
// function ShareModal({
//   post,
//   onShare,
//   onClose,
// }: {
//   post: BlogPost
//   onShare: (platform: string) => void
//   onClose: () => void
// }) {
//   const shareButtons = [
//     { platform: "twitter", icon: Twitter, label: "Twitter", color: "hover:bg-blue-50 hover:text-blue-600" },
//     { platform: "facebook", icon: Facebook, label: "Facebook", color: "hover:bg-blue-50 hover:text-blue-800" },
//     { platform: "linkedin", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-700" },
//     { platform: "copy", icon: Copy, label: "Copy Link", color: "hover:bg-gray-50 hover:text-gray-700" },
//   ]

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h3 className="text-xl font-bold text-gray-900">Share Post</h3>
//             <button 
//               onClick={onClose} 
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="mb-6">
//             <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
//             <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             {shareButtons.map(({ platform, icon: Icon, label, color }) => (
//               <button
//                 key={platform}
//                 onClick={() => onShare(platform)}
//                 className={`flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg transition-all duration-200 font-medium ${color}`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{label}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, Plus, Eye, MessageCircle, Heart, X, Edit, Trash2, Share2, Twitter, Facebook, Linkedin, Copy, Save, AlertCircle, CheckCircle, Tag, Upload, ImageIcon } from 'lucide-react'
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useBlogPosts } from "@/hooks/useBlogPosts"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/Textarea"
import { formatDate } from "@/lib/utils"
import { socialShare } from "@/lib/socialShare"
import type { BlogPost } from "@/lib/db"

export function BlogManager() {
  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()
  const { posts, loading, error, createPost, updatePost, deletePost, likePost } = useBlogPosts()

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    category: "Technology",
    excerpt: "",
    content: "",
    tags: "",
    published: true,
    image: "",
  })

  const resetForm = () => {
    setFormData({
      title: "",
      category: "Technology",
      excerpt: "",
      content: "",
      tags: "",
      published: true,
      image: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          image: event.target?.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      await createPost({
        ...formData,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      })

      setSubmitMessage({ type: "success", text: "Post created successfully!" })
      resetForm()
      setTimeout(() => {
        setShowAddModal(false)
        setSubmitMessage(null)
      }, 2000)
    } catch (err) {
      setSubmitMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to create post" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post)
    setFormData({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags.join(", "),
      published: post.published,
      image: post.image || "",
    })
    setShowEditModal(true)
  }

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPost) return

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      await updatePost(selectedPost.id, {
        ...formData,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      })

      setSubmitMessage({ type: "success", text: "Post updated successfully!" })
      setTimeout(() => {
        setShowEditModal(false)
        setSubmitMessage(null)
        setSelectedPost(null)
      }, 2000)
    } catch (err) {
      setSubmitMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to update post" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeletePost = async (post: BlogPost) => {
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) return

    try {
      await deletePost(post.id)
      setSubmitMessage({ type: "success", text: "Post deleted successfully!" })
      setTimeout(() => setSubmitMessage(null), 3000)
    } catch (err) {
      setSubmitMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to delete post" })
    }
  }

  const handleSharePost = (post: BlogPost) => {
    setSelectedPost(post)
    setShowShareModal(true)
  }

  const handleViewPost = (post: BlogPost) => {
    setSelectedPost(post)
    setShowViewModal(true)
  }

  const handleSocialShare = (platform: string) => {
    if (!selectedPost) return

    const shareData = {
      title: selectedPost.title,
      excerpt: selectedPost.excerpt,
      url: `${window.location.origin}/blog/${selectedPost.slug}`,
      hashtags: selectedPost.tags,
    }

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = socialShare.twitter(shareData)
        break
      case "facebook":
        shareUrl = socialShare.facebook(shareData)
        break
      case "linkedin":
        shareUrl = socialShare.linkedin(shareData)
        break
      case "copy":
        socialShare.copyToClipboard(shareData).then((success) => {
          if (success) {
            setSubmitMessage({ type: "success", text: "Link copied to clipboard!" })
            setTimeout(() => setSubmitMessage(null), 3000)
          }
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  const handleLikePost = async (post: BlogPost) => {
    try {
      await likePost(post.id)
    } catch (err) {
      console.error("Failed to like post:", err)
    }
  }

  if (loading) {
    return (
      <section id="blog" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blog posts...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="blog" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-red-600 text-lg">Error: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="blog" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          {/* Success/Error Messages */}
          {submitMessage && (
            <div
              className={`fixed top-24 right-4 z-50 p-4 rounded-xl shadow-xl backdrop-blur-sm border ${
                submitMessage.type === "success"
                  ? "bg-green-50/90 text-green-800 border-green-200"
                  : "bg-red-50/90 text-red-800 border-red-200"
              }`}
            >
              <div className="flex items-center">
                {submitMessage.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                )}
                <span className="font-medium">{submitMessage.text}</span>
              </div>
            </div>
          )}

          <div ref={ref}>
            <h2
              className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {t("blog.title")}
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on web development, design, and technology trends.
            </p>
          </div>

          {/* Admin Controls */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setShowAddModal(true)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create New Post
            </button>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No blog posts yet</h3>
              <p className="text-gray-500 mb-6">Create your first post to get started!</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="btn-primary"
              >
                Create Your First Post
              </button>
            </div>
          ) : (
            <>
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posts.map((post, index) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    index={index}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                    onShare={handleSharePost}
                    onLike={handleLikePost}
                    onView={handleViewPost}
                  />
                ))}
              </div>

              {/* View All Posts Button */}
              <div className="text-center mt-12">
                <button className="btn-primary inline-flex items-center gap-2">
                  Explore All Posts
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Create Post Modal */}
      {showAddModal && (
        <PostModal
          title="Create New Post"
          formData={formData}
          onInputChange={handleInputChange}
          onImageUpload={handleImageUpload}
          onSubmit={handleCreatePost}
          onClose={() => {
            setShowAddModal(false)
            resetForm()
            setSubmitMessage(null)
          }}
          isSubmitting={isSubmitting}
          submitMessage={submitMessage}
        />
      )}

      {/* Edit Post Modal */}
      {showEditModal && selectedPost && (
        <PostModal
          title="Edit Post"
          formData={formData}
          onInputChange={handleInputChange}
          onImageUpload={handleImageUpload}
          onSubmit={handleUpdatePost}
          onClose={() => {
            setShowEditModal(false)
            setSelectedPost(null)
            resetForm()
            setSubmitMessage(null)
          }}
          isSubmitting={isSubmitting}
          submitMessage={submitMessage}
        />
      )}

      {/* View Post Modal */}
      {showViewModal && selectedPost && (
        <ViewPostModal
          post={selectedPost}
          onClose={() => {
            setShowViewModal(false)
            setSelectedPost(null)
          }}
          onEdit={handleEditPost}
          onShare={handleSharePost}
          onLike={handleLikePost}
        />
      )}

      {/* Share Modal */}
      {showShareModal && selectedPost && (
        <ShareModal
          post={selectedPost}
          onShare={handleSocialShare}
          onClose={() => {
            setShowShareModal(false)
            setSelectedPost(null)
          }}
        />
      )}
    </>
  )
}

// Blog Post Card Component (Square Format)
function BlogPostCard({
  post,
  index = 0,
  onEdit,
  onDelete,
  onShare,
  onLike,
  onView,
}: {
  post: BlogPost
  index?: number
  onEdit: (post: BlogPost) => void
  onDelete: (post: BlogPost) => void
  onShare: (post: BlogPost) => void
  onLike: (post: BlogPost) => void
  onView: (post: BlogPost) => void
}) {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <article
      ref={ref}
      className={`blog-card aspect-square transition-all duration-500 cursor-pointer ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => onView(post)}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
          {!post.published && (
            <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
              Draft
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onLike(post)
                }}
                className="flex items-center gap-1 hover:text-red-500 transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </button>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onEdit(post)
                }}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Edit post"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onShare(post)
                }}
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                title="Share post"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(post)
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <button 
              onClick={() => onView(post)}
              className="text-primary-600 hover:text-secondary-600 transition-colors font-medium text-sm group"
            >
              Read More 
              <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

// View Post Modal Component
function ViewPostModal({
  post,
  onClose,
  onEdit,
  onShare,
  onLike,
}: {
  post: BlogPost
  onClose: () => void
  onEdit: (post: BlogPost) => void
  onShare: (post: BlogPost) => void
  onLike: (post: BlogPost) => void
}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </span>
              {!post.published && (
                <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">
                  Draft
                </span>
              )}
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Post Image */}
          {post.image && (
            <div className="mb-6">
              <img 
                src={post.image || "/placeholder.svg"} 
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views} views</span>
            </div>
            <button
              onClick={() => onLike(post)}
              className="flex items-center gap-1 hover:text-red-500 transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span>{post.likes} likes</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <div className="bg-gray-50 p-4 rounded-xl mb-6">
            <p className="text-gray-700 italic">{post.excerpt}</p>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onEdit(post)}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Post
              </button>
              <button
                onClick={() => onShare(post)}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Post Modal Component (with Image Upload)
function PostModal({
  title,
  formData,
  onInputChange,
  onImageUpload,
  onSubmit,
  onClose,
  isSubmitting,
  submitMessage,
}: {
  title: string
  formData: any
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
  isSubmitting: boolean
  submitMessage: { type: "success" | "error"; text: string } | null
}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <Input
                name="title"
                value={formData.title}
                onChange={onInputChange}
                placeholder="Enter post title..."
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={onInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                required
              >
                <option value="Technology">Technology</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Tips">Tips</option>
                <option value="News">News</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Post Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              {formData.image ? (
                <div className="relative">
                  <img 
                    src={formData.image || "/placeholder.svg"} 
                    alt="Preview" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <button
                    type="button"
                    onClick={() => onInputChange({ target: { name: 'image', value: '' } } as any)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload an image for your post</p>
                  <p className="text-sm text-gray-500 mb-4">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={onImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="btn-secondary cursor-pointer inline-flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                {formData.image ? 'Change Image' : 'Upload Image'}
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <Input
              name="tags"
              value={formData.tags}
              onChange={onInputChange}
              placeholder="Enter tags separated by commas..."
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
            <Textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={onInputChange}
              rows={3}
              placeholder="Brief description of your post..."
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
            <Textarea
              name="content"
              value={formData.content}
              onChange={onInputChange}
              rows={12}
              placeholder="Write your post content here..."
              required
              className="w-full"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={onInputChange}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-700">
              Publish immediately
            </label>
          </div>

          {submitMessage && (
            <div
              className={`p-4 rounded-lg border ${
                submitMessage.type === "success"
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
              }`}
            >
              <div className="flex items-center">
                {submitMessage.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                )}
                <span className="font-medium">{submitMessage.text}</span>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {title.includes("Create") ? "Create Post" : "Update Post"}
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary px-6"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Share Modal Component
function ShareModal({
  post,
  onShare,
  onClose,
}: {
  post: BlogPost
  onShare: (platform: string) => void
  onClose: () => void
}) {
  const shareButtons = [
    { platform: "twitter", icon: Twitter, label: "Twitter", color: "hover:bg-blue-50 hover:text-blue-600" },
    { platform: "facebook", icon: Facebook, label: "Facebook", color: "hover:bg-blue-50 hover:text-blue-800" },
    { platform: "linkedin", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-700" },
    { platform: "copy", icon: Copy, label: "Copy Link", color: "hover:bg-gray-50 hover:text-gray-700" },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Share Post</h3>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
            <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {shareButtons.map(({ platform, icon: Icon, label, color }) => (
              <button
                key={platform}
                onClick={() => onShare(platform)}
                className={`flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg transition-all duration-200 font-medium ${color}`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
