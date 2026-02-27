"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"

declare global {
  interface Window {
    gitInfo?: {
      commitId: string
      buildTime: string
    }
  }
}

export function PostHogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const runId = "prod-env-check"
    const commitId = process.env.NEXT_PUBLIC_GIT_COMMIT ?? "unknown"
    const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME ?? "unknown"
    window.gitInfo = { commitId, buildTime }

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
    // #region agent log
    fetch("http://127.0.0.1:7356/ingest/250d9ade-2cae-4cab-855f-40e7555921fb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "5b8f0a",
      },
      body: JSON.stringify({
        sessionId: "5b8f0a",
        runId,
        hypothesisId: "P1",
        location: "app/posthog-provider.tsx:prod-env-check",
        message: "PostHog env diagnostic",
        data: {
          hostname: window.location.hostname,
          hasKey: Boolean(key),
          hasHost: Boolean(host),
          hostValue: host ?? null,
          commitId,
          buildTime,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion
    console.info("[PROD-PH-CHECK]", {
      hostname: window.location.hostname,
      hasKey: Boolean(key),
      hasHost: Boolean(host),
      hostValue: host ?? null,
      gitInfo: window.gitInfo,
    })
    if (key && host) {
      posthog.init(key, {
        api_host: host,
        capture_pageview: true,
        capture_pageleave: true,
        session_recording: {
          maskAllInputs: false,
          maskInputOptions: { password: true },
        },
        enable_heatmaps: true,
      })
    }
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
