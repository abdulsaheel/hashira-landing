"use client"

import { useEffect, useRef } from "react"

interface InteractiveEyeProps {
  className?: string
}

export function InteractiveEye({ className = "" }: InteractiveEyeProps) {
  const eyeRef = useRef<HTMLDivElement>(null)
  const pupilRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current || !pupilRef.current) return

      const eye = eyeRef.current.getBoundingClientRect()
      const pupil = pupilRef.current

      // Calculate center of eye
      const eyeCenterX = eye.left + eye.width / 2
      const eyeCenterY = eye.top + eye.height / 2

      // Calculate angle between mouse and eye center
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)

      // Calculate maximum distance pupil can move (25% of eye size)
      const maxDistanceX = eye.width * 0.25
      const maxDistanceY = eye.height * 0.25

      // Calculate pupil position
      const pupilX = Math.cos(angle) * maxDistanceX
      const pupilY = Math.sin(angle) * maxDistanceY

      // Update pupil position
      pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className={`eye ${className}`} ref={eyeRef}>
      <div className="pupil" ref={pupilRef}></div>
    </div>
  )
}
