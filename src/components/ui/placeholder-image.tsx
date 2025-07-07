import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  width?: number
  height?: number
  className?: string
  alt?: string
  text?: string
}

export function PlaceholderImage({
  width = 400,
  height = 300,
  className,
  alt = "Placeholder",
  text,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-medium",
        className,
      )}
      style={{ width, height }}
      role="img"
      aria-label={alt}
    >
      {text || `${width}×${height}`}
    </div>
  )
}
