"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"

export function MagneticButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const limit = 120

    if (dist < limit) {
      const force = (1 - dist / limit) * 12
      setTransform(`translate(${dx * force / limit}px, ${dy * force / limit}px)`)
    }
  }

  function handleMouseLeave() {
    setTransform("")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? "transform 0.15s ease-out" : "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      }}
      className={className}
    >
      {children}
    </div>
  )
}
