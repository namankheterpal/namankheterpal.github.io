"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { track } from "@/lib/analytics"

interface TrackedLinkProps {
  href: string
  children: React.ReactNode
  eventName: string
  eventProperties?: Record<string, unknown>
  className?: string
  [key: string]: unknown
}

export function TrackedLink({
  href,
  children,
  eventName,
  eventProperties = {},
  className,
  ...props
}: TrackedLinkProps) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        track(eventName, { ...eventProperties, page: pathname ?? "/" })
      }
      {...props}
    >
      {children}
    </Link>
  )
}
