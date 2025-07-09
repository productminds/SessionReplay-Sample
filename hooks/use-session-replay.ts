"use client"

import { useCallback, useRef, useState, useEffect } from "react"
import { startSessionReplay, stopSessionReplay, isSessionReplayActive, getSessionReplayStatus } from "@/lib/amplitude"

export function useSessionReplay() {
  const currentTriggerRef = useRef<string | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Poll for session replay status
  useEffect(() => {
    const checkStatus = () => {
      const status = getSessionReplayStatus()
      setIsActive(status.isRecording)
      setIsInitialized(status.isInitialized)
    }

    // Check immediately
    checkStatus()

    // Set up polling interval
    const interval = setInterval(checkStatus, 500)

    return () => clearInterval(interval)
  }, [])

  const handleElementInteraction = useCallback(
    async (elementName: string, action: "start" | "stop" | "toggle") => {
      if (!isInitialized) {
        console.warn("Session replay plugin not initialized yet")
        return false
      }

      if (isLoading) {
        console.warn("Session replay operation already in progress")
        return false
      }

      setIsLoading(true)
      const currentlyActive = isSessionReplayActive()

      try {
        switch (action) {
          case "start":
            console.warn("Entro al start");
            if (!currentlyActive) {
              const success = await startSessionReplay(elementName)
              if (success) {
                currentTriggerRef.current = elementName
                setIsActive(true)
              }
              return success
            }
            break

          case "stop":
            console.warn("Entro al stop");
            if (currentlyActive) {
              const success = await stopSessionReplay(elementName)
              if (success) {
                currentTriggerRef.current = null
                setIsActive(false)
              }
              return success
            }
            break

          case "toggle":
            console.warn("Entro al toggle");
            if (currentlyActive) {
              const success = await stopSessionReplay(elementName)
              if (success) {
                currentTriggerRef.current = null
                setIsActive(false)
              }
              return success
            } else {
              const success = await startSessionReplay(elementName)
              if (success) {
                currentTriggerRef.current = elementName
                setIsActive(true)
              }
              return success
            }
        }
      } catch (error) {
        console.error("Session replay operation failed:", error)
        return false
      } finally {
        setIsLoading(false)
      }
      return false
    },
    [isInitialized, isLoading],
  )

  const startReplayOnInteraction = useCallback(
    async (elementName: string) => {
      // If there's already an active session from a different element, stop it first
      if (isActive && currentTriggerRef.current !== elementName) {
        await stopSessionReplay(currentTriggerRef.current || "previous_element")
        setIsActive(false)
      }

      // Start new session
      return await handleElementInteraction(elementName, "start")
    },
    [handleElementInteraction, isActive],
  )

  const stopReplayOnInteraction = useCallback(
    async (elementName: string) => {
      return await handleElementInteraction(elementName, "stop")
    },
    [handleElementInteraction],
  )

  const toggleReplayOnInteraction = useCallback(
    async (elementName: string) => {
      return await handleElementInteraction(elementName, "toggle")
    },
    [handleElementInteraction],
  )

  return {
    startReplayOnInteraction,
    stopReplayOnInteraction,
    toggleReplayOnInteraction,
    isActive,
    isInitialized,
    isLoading,
    currentTrigger: currentTriggerRef.current,
  }
}
