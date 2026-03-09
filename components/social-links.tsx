"use client"

import { PERSONAL } from "@/lib/portfolio-data"
import { Linkedin, Instagram, MessageCircle, Github, FileText } from "lucide-react"

export function SocialLinks({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? 22 : 16

  const links = [
    {
      href: PERSONAL.linkedin,
      icon: <Linkedin size={iconSize} />,
      label: "LinkedIn",
    },
    {
      href: PERSONAL.instagram,
      icon: <Instagram size={iconSize} />,
      label: "Instagram",
    },
    {
      href: `https://wa.me/${PERSONAL.whatsapp}`,
      icon: <MessageCircle size={iconSize} />,
      label: "WhatsApp",
    },
    {
      href: PERSONAL.github,
      icon: <Github size={iconSize} />,
      label: "GitHub",
    },
    {
      href: PERSONAL.cv,
      icon: <FileText size={iconSize} />,
      label: "CV",
    },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] active:scale-90 sm:h-11 sm:w-11"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
