import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import AmplitudeProvider from "@/components/amplitude-provider"
import SessionReplayDebug from "@/components/session-replay-debug"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AmplitudeProvider>{children}</AmplitudeProvider>
        {/* Show debug component only in development */}
        {process.env.NODE_ENV === "development" && <SessionReplayDebug />}
      </body>
    </html>
  )
}
