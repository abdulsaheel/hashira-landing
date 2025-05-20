"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface InvestorLogo {
  src: string
  alt: string
  width: number
}

export function InvestorsCarousel() {
  const investors: InvestorLogo[] = [
    { src: "/images/muticoin-capital.png", alt: "Multicoin Capital", width: 180 },
    { src: "/images/ledger-prime.png", alt: "Ledger Prime", width: 180 },
    { src: "/images/fisher-8.png", alt: "Fisher8", width: 140 },
    // Monochromatic placeholders
    { src: "/placeholder.svg?height=50&width=120&text=AMBER", alt: "Amber", width: 120 },
    { src: "/placeholder.svg?height=50&width=140&text=PARADIGM", alt: "Paradigm", width: 140 },
    { src: "/placeholder.svg?height=50&width=130&text=A16Z", alt: "A16Z", width: 130 },
    { src: "/placeholder.svg?height=50&width=150&text=SEQUOIA", alt: "Sequoia", width: 150 },
  ]

  const duplicatedInvestors = [...investors, ...investors]
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!carouselRef.current) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const carousel = carouselRef.current
    carousel.addEventListener("mouseenter", handleMouseEnter)
    carousel.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      carousel.removeEventListener("mouseenter", handleMouseEnter)
      carousel.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-track" style={{ animationPlayState: isHovered ? "paused" : "running" }}>
        {duplicatedInvestors.map((investor, index) => (
          <div key={`${investor.alt}-${index}`} className="carousel-item flex items-center justify-center">
            <div className="h-12 relative" style={{ width: `${investor.width}px` }}>
              <Image src={investor.src || "/placeholder.svg"} alt={investor.alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
