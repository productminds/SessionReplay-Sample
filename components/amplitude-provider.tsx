"use client"

import type React from "react"

import { useEffect } from "react"
import { initializeAmplitude } from "@/lib/amplitude"

export default function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Amplitude when the component mounts
    initializeAmplitude()
  }, [])

  return <>{children}</>
}
