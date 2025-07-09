import * as amplitude from "@amplitude/analytics-browser"
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser"

let sessionReplayInstance: any = null
let isRecording = false

// Initialize Amplitude
export const initializeAmplitude = () => {
  // Replace with your actual Amplitude API key
  const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || "YOUR-API-KEY"

  // Create session replay plugin instance
  sessionReplayInstance = sessionReplayPlugin({
    // Configure the plugin
    sampleRate: 1, // When active, record 100% of sessions
    //debugMode: process.env.NODE_ENV === "development",
  })

  amplitude.init(API_KEY, {
    // Optional configuration
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
  })

  // Add the session replay plugin
  amplitude.add(sessionReplayInstance)
}

// Helper function to track events
export const trackEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  amplitude.track(eventName, eventProperties)
}


export const startSessionReplay = async (elementName?: string) => {
  if (sessionReplayInstance && !isRecording) {
    try {
      // Add the session replay plugin to start recording
      await amplitude.add(sessionReplayInstance).promise
      isRecording = true

      // Track that we started a replay session
      trackEvent("Session Replay Started", {
        trigger_element: elementName || "unknown",
        timestamp: new Date().toISOString(),
      })

      console.log(`Session replay started for element: ${elementName}`)
      return true
    } catch (error) {
      console.error("Failed to start session replay:", error)
      return false
    }
  }
  return false
}

// Helper function to stop session replay
export const stopSessionReplay = async (elementName?: string) => {
  if (sessionReplayInstance && isRecording) {
    try {
      // Remove the session replay plugin to stop recording
      await amplitude.remove(sessionReplayInstance.name).promise
      isRecording = false

      // Track that we stopped the replay session
      trackEvent("Session Replay Stopped", {
        trigger_element: elementName || "unknown",
        timestamp: new Date().toISOString(),
      })

      console.log(`Session replay stopped for element: ${elementName}`)
      return true
    } catch (error) {
      console.error("Failed to stop session replay:", error)
      return false
    }
  }
  return false
}

// Helper function to check if session replay is currently recording
export const isSessionReplayActive = (): boolean => {
  return isRecording
}

// Helper function to get session replay plugin status
export const getSessionReplayStatus = () => {
  return {
    isInitialized: sessionReplayInstance !== null,
    isRecording: isRecording,
    instance: sessionReplayInstance,
  }
}

