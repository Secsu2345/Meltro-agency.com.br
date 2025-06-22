"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, width, height, className = "", priority = false }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Use a proper placeholder that will always work
  const placeholderSrc = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" textAnchor="middle" dy=".3em">
        ${alt}
      </text>
    </svg>
  `)}`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <LoadingSpinner />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isLoading && !error ? 0 : 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={error ? placeholderSrc : src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={85}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true)
            setIsLoading(false)
          }}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}
