"use client"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { searchData } from "@/lib/constants"
import { debounce } from "@/lib/utils"

interface SearchResult {
  title: string
  url: string
  content: string
}

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const debouncedSearch = debounce((searchQuery: string) => {
    if (searchQuery.trim().length === 0) {
      setResults([])
      setIsOpen(false)
      return
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setResults(filteredResults)
    setIsOpen(true)
  }, 300)

  useEffect(() => {
    debouncedSearch(query)
  }, [query, debouncedSearch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleResultClick = (url: string) => {
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
    setQuery("")
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-sm">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
        />
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-10 border border-gray-200">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result.url)}
              className="block w-full text-left p-3 hover:bg-gray-100 border-b border-gray-200 last:border-b-0 transition-colors"
            >
              <div className="font-semibold text-sm">{result.title}</div>
            </button>
          ))}
        </div>
      )}

      {isOpen && results.length === 0 && query.trim().length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg mt-1 z-10 border border-gray-200">
          <div className="p-4 text-gray-500 text-sm">No results found</div>
        </div>
      )}
    </div>
  )
}
