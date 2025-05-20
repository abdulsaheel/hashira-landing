"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function InteractiveEyes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftEyeballRef = useRef<HTMLImageElement>(null)
  const rightEyeballRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !leftEyeballRef.current || !rightEyeballRef.current) return

      const container = containerRef.current.getBoundingClientRect()
      const leftEyeball = leftEyeballRef.current
      const rightEyeball = rightEyeballRef.current

      const containerCenterX = container.left + container.width / 2
      const containerCenterY = container.top + container.height / 2

      const angle = Math.atan2(e.clientY - containerCenterY, e.clientX - containerCenterX)

      const maxDistanceX = 15
      const maxDistanceY = 15

      // Add slight variation to create natural individual movement
      const leftEyeballX = Math.cos(angle + 0.05) * maxDistanceX
      const leftEyeballY = Math.sin(angle + 0.05) * maxDistanceY
      const rightEyeballX = Math.cos(angle - 0.05) * maxDistanceX
      const rightEyeballY = Math.sin(angle - 0.05) * maxDistanceY

      leftEyeball.style.transform = `translate(${leftEyeballX}px, ${leftEyeballY}px)`
      rightEyeball.style.transform = `translate(${rightEyeballX}px, ${rightEyeballY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-[500px] h-[200px]">
      {/* Left Eyebrow - Tilted Inward */}
      <div className="absolute left-[110px] top-[-25px] -rotate-[80deg]">
        <Image src="/images/left-eyebrow.svg" alt="Left Eyebrow" width={120} height={90} />
      </div>

      {/* Right Eyebrow */}
      <div className="absolute right-[110px] top-[-25px] rotate-[80deg]">
        <Image src="/images/right-eyebrow.svg" alt="Right Eyebrow" width={120} height={90} />
      </div>

      {/* Left Eye Exterior */}
      <div className="absolute left-[5px] top-[80px]">
        <Image src="/images/eye-ball-exterior-left.svg" alt="Left Eye Exterior" width={200} height={120} />
        <div className="absolute left-[75px] top-[15px]">
          <Image
            ref={leftEyeballRef}
            src="/images/left-eye-ball.svg"
            alt="Left Eyeball"
            width={110}
            height={110}
            className="transition-transform duration-100 ease-out"
          />
        </div>
      </div>

      {/* Right Eye Exterior */}
      <div className="absolute right-[5px] top-[80px]">
        <Image src="/images/eye-ball-exterior-right.svg" alt="Right Eye Exterior" width={200} height={120} />
        <div className="absolute left-[75px] top-[15px]">
          <Image
            ref={rightEyeballRef}
            src="/images/right-eye-ball.svg"
            alt="Right Eyeball"
            width={110}
            height={110}
            className="transition-transform duration-100 ease-out"
          />
        </div>
      </div>

      {/* Mouth */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[20px]">
        <Image src="/images/mouth.svg" alt="Mouth" width={45} height={15} />
      </div>
    </div>
  )
}
