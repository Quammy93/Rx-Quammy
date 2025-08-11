export interface ShareData {
  title: string
  excerpt: string
  url: string
  hashtags?: string[]
}

export const socialShare = {
  twitter: ({ title, excerpt, url, hashtags = [] }: ShareData) => {
    const text = `${title}\n\n${excerpt}`
    const hashtagString = hashtags.map((tag) => `#${tag}`).join(" ")
    const tweetText = `${text}\n\n${hashtagString}\n\n${url}`

    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
  },

  facebook: ({ url }: ShareData) => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },

  linkedin: ({ title, excerpt, url }: ShareData) => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(excerpt)}`
  },

  reddit: ({ title, url }: ShareData) => {
    return `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  },

  whatsapp: ({ title, url }: ShareData) => {
    const text = `${title}\n\n${url}`
    return `https://wa.me/?text=${encodeURIComponent(text)}`
  },

  telegram: ({ title, url }: ShareData) => {
    const text = `${title}\n\n${url}`
    return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  },

  copyToClipboard: async ({ url }: ShareData) => {
    try {
      await navigator.clipboard.writeText(url)
      return true
    } catch (err) {
      return false
    }
  },

  nativeShare: async ({ title, excerpt, url }: ShareData) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url,
        })
        return true
      } catch (err) {
        return false
      }
    }
    return false
  },
}
