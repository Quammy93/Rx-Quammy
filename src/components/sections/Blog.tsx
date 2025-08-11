// "use client"
// import type React from "react"

// import { Calendar, Clock, ArrowRight, Tag, Plus, Eye, MessageCircle, Heart, X } from "lucide-react"
// import { useTranslation } from "@/hooks/useTranslation"
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/Textarea"
// import { blogPosts } from "@/lib/constants"
// import { formatDate } from "@/lib/utils"
// import { useState } from "react"

// export function Blog() {
//   const { t } = useTranslation()
//   const { ref, isIntersecting } = useIntersectionObserver()
//   const [showAddPostModal, setShowAddPostModal] = useState(false)
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "Tutorial",
//     excerpt: "",
//     content: "",
//   })

//   // Get the latest post (first one) and the rest
//   const latestPost = blogPosts[0]
//   const otherPosts = blogPosts.slice(1)

//   const handleAddPost = () => {
//     setShowAddPostModal(true)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("New post data:", formData)
//     // Here you would typically send the data to your backend
//     setShowAddPostModal(false)
//     setFormData({ title: "", category: "Tutorial", excerpt: "", content: "" })
//   }

//   return (
//     <>
//       <section id="blog" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto">
//           <div ref={ref}>
//             <h2
//               className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//             >
//               {t("blog.title")}
//             </h2>
//             <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//               Insights, tutorials, and thoughts on web development, design, and technology trends.
//             </p>
//           </div>

//           {/* Latest Post Section */}
//           <div className="mb-16">
//             <div className="flex items-center justify-between mb-8">
//               <h3 className="text-2xl font-bold text-gray-900">My Blogs</h3>
//               <button
//                 onClick={handleAddPost}
//                 className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 hover:border-primary-400 transition-all duration-300 font-medium"
//               >
//                 <Plus className="w-4 h-4" />
//                 Add Post
//               </button>
//             </div>

//             {/* Featured Latest Post */}
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
//               <div className="grid lg:grid-cols-2 gap-0">
//                 {/* Image Section */}
//                 <div className="relative overflow-hidden">
//                   <div className="w-full h-64 lg:h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
//                     <span className="text-primary-600 font-semibold">Featured Post Image</span>
//                   </div>
//                   <div className="absolute top-4 left-4 flex gap-2">
//                     <span className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
//                       <Tag className="w-3 h-3 mr-1" />
//                       Featured
//                     </span>
//                     <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
//                       New
//                     </span>
//                   </div>

//                   {/* Overlay with stats */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div className="flex items-center gap-4 text-white text-sm">
//                       <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                         <Eye className="w-4 h-4" />
//                         <span>1.2k</span>
//                       </div>
//                       <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                         <Heart className="w-4 h-4" />
//                         <span>89</span>
//                       </div>
//                       <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                         <MessageCircle className="w-4 h-4" />
//                         <span>23</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8 lg:p-12 flex flex-col justify-center">
//                   <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       <span>{formatDate(latestPost.date)}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       <span>{latestPost.readTime}</span>
//                     </div>
//                   </div>

//                   <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 hover:text-primary-600 transition-colors">
//                     {latestPost.title}
//                   </h3>

//                   <p className="text-gray-600 mb-6 text-lg leading-relaxed">{latestPost.excerpt}</p>

//                   <div className="flex items-center justify-between">
//                     <button className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group text-lg">
//                       {t("blog.readMore")}
//                       <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </button>

//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
//                         <span className="text-white text-sm font-bold">Y</span>
//                       </div>
//                       <div className="text-sm">
//                         <p className="font-medium text-gray-900">Your Name</p>
//                         <p className="text-gray-500">Author</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Other Posts Section */}
//           <div>
//             <div className="flex items-center justify-between mb-8">
//               <h3 className="text-2xl font-bold text-gray-900">More Articles</h3>
//               <button className="text-primary-600 hover:text-secondary-600 transition-colors font-medium">
//                 View All Posts →
//               </button>
//             </div>

//             {/* Posts Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {otherPosts.map((post, index) => (
//                 <BlogCard key={post.id} post={post} index={index} />
//               ))}
//             </div>
//           </div>

//           {/* Add Post Card */}
//           <div className="mt-8">
//             <div
//               onClick={handleAddPost}
//               className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 cursor-pointer group"
//             >
//               <div className="w-16 h-16 bg-gray-100 group-hover:bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
//                 <Plus className="w-8 h-8 text-gray-400 group-hover:text-primary-600 transition-colors" />
//               </div>
//               <h4 className="text-lg font-semibold text-gray-700 group-hover:text-primary-700 mb-2">Create New Post</h4>
//               <p className="text-gray-500 group-hover:text-primary-600">
//                 Share your thoughts and insights with the world
//               </p>
//             </div>
//           </div>

//           {/* View All Posts Button */}
//           <div className="text-center mt-12">
//             <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
//               Explore All Posts
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Add Post Modal */}
//       {showAddPostModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-2xl font-bold text-gray-900">Create New Post</h3>
//                 <button
//                   onClick={() => setShowAddPostModal(false)}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
//                 <Input
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   placeholder="Enter post title..."
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 >
//                   <option value="Tutorial">Tutorial</option>
//                   <option value="Insights">Insights</option>
//                   <option value="News">News</option>
//                   <option value="Tips">Tips</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
//                 <Textarea
//                   name="excerpt"
//                   value={formData.excerpt}
//                   onChange={handleInputChange}
//                   rows={3}
//                   placeholder="Brief description of your post..."
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
//                 <Textarea
//                   name="content"
//                   value={formData.content}
//                   onChange={handleInputChange}
//                   rows={8}
//                   placeholder="Write your post content here..."
//                   required
//                 />
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                 >
//                   Publish Post
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowAddPostModal(false)}
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// function BlogCard({ post, index }: { post: any; index: number }) {
//   const { ref, isIntersecting } = useIntersectionObserver()
//   const { t } = useTranslation()

//   return (
//     <article
//       ref={ref}
//       className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
//         isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//       style={{ transitionDelay: `${index * 100}ms` }}
//     >
//       <div className="relative overflow-hidden">
//         <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-accent-100 flex items-center justify-center">
//           <span className="text-secondary-600 font-medium">Blog Post Image</span>
//         </div>
//         <div className="absolute top-4 left-4">
//           <span className="inline-flex items-center px-3 py-1 bg-secondary-600 text-white text-xs font-medium rounded-full">
//             <Tag className="w-3 h-3 mr-1" />
//             Tutorial
//           </span>
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

//         <div className="flex items-center justify-between">
//           <button className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group">
//             {t("blog.readMore")}
//             <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>

//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
//               <span className="text-white text-xs font-bold">Y</span>
//             </div>
//             <span className="text-sm text-gray-500">Your Name</span>
//           </div>
//         </div>
//       </div>
//     </article>
//   )
// }
