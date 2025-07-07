// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { Calendar, Clock, ArrowRight, Tag, Plus, Eye, MessageCircle, Heart } from "lucide-react"
// import { useTranslation } from "@/hooks/useTranslation"
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
// import { Button } from "@/components/ui/Button"
// //import { blogPosts } from "@/lib/constants"
// import { formatDate } from "@/lib/utils"
// import { useEffect, useState } from "react";


// export function Blog() {
//   const { t } = useTranslation()
//   const { ref, isIntersecting } = useIntersectionObserver()
//   const [posts, setPosts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("/api/blogs");
//         const data = await res.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Failed to fetch blog posts", err);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (posts.length === 0) return null; // or a loader


//   // Get the latest post (first one) and the rest
//   const latestPost = posts[0]
//   const otherPosts = posts.slice(1)

//   const handleAddPost = () => {
//     // This would typically open a modal or navigate to a create post page
//     console.log("Add new post clicked")
//     // You can implement your post creation logic here
//   }

//   return (
//     <section id="blog" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="container mx-auto">
//         <div ref={ref}>
//           <h2
//             className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             {t("blog.title")}
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             Insights, tutorials, and thoughts on web development, design, and technology trends.
//           </p>
//         </div>

//         {/* Latest Post Section */}
//         <div className="mb-16">
//           <div className="flex items-center justify-between mb-8">
//             <h3 className="text-2xl font-bold text-gray-900">Latest Post</h3>
//             <Button
//               onClick={handleAddPost}
//               variant="outline"
//               size="sm"
//               className="flex items-center gap-2 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-300 bg-transparent"
//             >
//               <Plus className="w-4 h-4" />
//               Add Post
//             </Button>
//           </div>

//           {/* Featured Latest Post */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
//             <div className="grid lg:grid-cols-2 gap-0">
//               {/* Image Section */}
//               <div className="relative overflow-hidden">
//                 <Image
//                   src={latestPost.image || "/placeholder.svg"}
//                   alt={latestPost.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
//                 />
//                 <div className="absolute top-4 left-4 flex gap-2">
//                   <span className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
//                     <Tag className="w-3 h-3 mr-1" />
//                     Featured
//                   </span>
//                   <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
//                     New
//                   </span>
//                 </div>

//                 {/* Overlay with stats */}
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <div className="flex items-center gap-4 text-white text-sm">
//                     <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                       <Eye className="w-4 h-4" />
//                       <span>1.2k</span>
//                     </div>
//                     <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                       <Heart className="w-4 h-4" />
//                       <span>89</span>
//                     </div>
//                     <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
//                       <MessageCircle className="w-4 h-4" />
//                       <span>23</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-8 lg:p-12 flex flex-col justify-center">
//                 <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     <span>{formatDate(latestPost.date)}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-4 h-4" />
//                     <span>{latestPost.readTime}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
//                   <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
//                 </h3>

//                 <p className="text-gray-600 mb-6 text-lg leading-relaxed line-clamp-3">{latestPost.excerpt}</p>

//                 <div className="flex items-center justify-between">
//                   <Link
//                     href={`/blog/${latestPost.slug}`}
//                     className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group text-lg"
//                   >
//                     {t("blog.readMore")}
//                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </Link>

//                   <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
//                       <span className="text-white text-sm font-bold">Y</span>
//                     </div>
//                     <div className="text-sm">
//                       <p className="font-medium text-gray-900">Your Name</p>
//                       <p className="text-gray-500">Author</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Other Posts Section */}
//         <div>
//           <div className="flex items-center justify-between mb-8">
//             <h3 className="text-2xl font-bold text-gray-900">More Articles</h3>
//             <Link href="/blog" className="text-primary-600 hover:text-secondary-600 transition-colors font-medium">
//               View All Posts →
//             </Link>
//           </div>

//           {/* Posts Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {otherPosts.map((post, index) => (
//               <BlogCard key={post.id} post={post} index={index} />
//             ))}
//           </div>
//         </div>

//         {/* Add Post Card */}
//         <div className="mt-8">
//           <div
//             onClick={handleAddPost}
//             className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 cursor-pointer group"
//           >
//             <div className="w-16 h-16 bg-gray-100 group-hover:bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
//               <Plus className="w-8 h-8 text-gray-400 group-hover:text-primary-600 transition-colors" />
//             </div>
//             <h4 className="text-lg font-semibold text-gray-700 group-hover:text-primary-700 mb-2">Create New Post</h4>
//             <p className="text-gray-500 group-hover:text-primary-600">
//               Share your thoughts and insights with the world
//             </p>
//           </div>
//         </div>

//         {/* View All Posts Button */}
//         <div className="text-center mt-12">
//           <Link
//             href="/blog"
//             className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
//           >
//             Explore All Posts
//             <ArrowRight className="ml-2 w-5 h-5" />
//           </Link>
//         </div>
//       </div>
//     </section>
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
//         <Image
//           src={post.image || "/placeholder.svg"}
//           alt={post.title}
//           width={400}
//           height={200}
//           className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//         />
//         <div className="absolute top-4 left-4">
//           <span className="inline-flex items-center px-3 py-1 bg-secondary-600 text-white text-xs font-medium rounded-full">
//             <Tag className="w-3 h-3 mr-1" />
//             Tutorial
//           </span>
//         </div>

//         {/* Hover overlay with stats */}
//         <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-end p-4 opacity-0 hover:opacity-100">
//           <div className="flex items-center gap-3 text-white text-sm">
//             <div className="flex items-center gap-1">
//               <Eye className="w-4 h-4" />
//               <span>856</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Heart className="w-4 h-4" />
//               <span>42</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <MessageCircle className="w-4 h-4" />
//               <span>15</span>
//             </div>
//           </div>
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

//         <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors line-clamp-2">
//           <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//         </h3>

//         <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

//         <div className="flex items-center justify-between">
//           <Link
//             href={`/blog/${post.slug}`}
//             className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group"
//           >
//             {t("blog.readMore")}
//             <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </Link>

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

"use client"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Tag, Plus, Eye, MessageCircle, Heart } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { Button } from "@/components/ui/Button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { blogPosts } from "@/lib/constants"
import { formatDate } from "@/lib/utils"

export function Blog() {
  const { t } = useTranslation()
  const { ref, isIntersecting } = useIntersectionObserver()

  // Get the latest post (first one) and the rest
  const latestPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  const handleAddPost = () => {
    // This would typically open a modal or navigate to a create post page
    console.log("Add new post clicked")
    // You can implement your post creation logic here
  }

  return (
    <section id="blog" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
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

        {/* Latest Post Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Post</h3>
            <Button
              onClick={handleAddPost}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-300 bg-transparent"
            >
              <Plus className="w-4 h-4" />
              Add Post
            </Button>
          </div>

          {/* Featured Latest Post */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <PlaceholderImage
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                  alt={latestPost.title}
                  text="Featured Post"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                    New
                  </span>
                </div>

                {/* Overlay with stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Eye className="w-4 h-4" />
                      <span>1.2k</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Heart className="w-4 h-4" />
                      <span>89</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <MessageCircle className="w-4 h-4" />
                      <span>23</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(latestPost.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{latestPost.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
                </h3>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed line-clamp-3">{latestPost.excerpt}</p>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group text-lg"
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">Y</span>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Your Name</p>
                      <p className="text-gray-500">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">More Articles</h3>
            <Link href="/blog" className="text-primary-600 hover:text-secondary-600 transition-colors font-medium">
              View All Posts →
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        {/* Add Post Card */}
        <div className="mt-8">
          <div
            onClick={handleAddPost}
            className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-16 h-16 bg-gray-100 group-hover:bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
              <Plus className="w-8 h-8 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>
            <h4 className="text-lg font-semibold text-gray-700 group-hover:text-primary-700 mb-2">Create New Post</h4>
            <p className="text-gray-500 group-hover:text-primary-600">
              Share your thoughts and insights with the world
            </p>
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Explore All Posts
            <ArrowRight className="ml-2 w-5 h-5" />
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
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <PlaceholderImage
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          alt={post.title}
          text="Blog Post"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-secondary-600 text-white text-xs font-medium rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            Tutorial
          </span>
        </div>

        {/* Hover overlay with stats */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-end p-4 opacity-0 hover:opacity-100">
          <div className="flex items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>856</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>42</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>15</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors group"
          >
            {t("blog.readMore")}
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">Y</span>
            </div>
            <span className="text-sm text-gray-500">Your Name</span>
          </div>
        </div>
      </div>
    </article>
  )
}
