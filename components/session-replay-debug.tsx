"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useSessionReplay } from "@/hooks/use-session-replay"
import { getSessionReplayStatus } from "@/lib/amplitude"
import { Loader2 } from "lucide-react"

export default function SessionReplayDebug() {
  const { startReplayOnInteraction, stopReplayOnInteraction, isActive, isInitialized, isLoading, currentTrigger } =
    useSessionReplay()
  const [status, setStatus] = useState({ isInitialized: false, isRecording: false })
  const [lastAction, setLastAction] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getSessionReplayStatus())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleAction = async (action: string, elementName: string) => {
    let success = false
    if (action === "start") {
      success = await startReplayOnInteraction(elementName)
    } else {
      success = await stopReplayOnInteraction(elementName)
    }

    if (success) {
      setLastAction(`${action} - ${elementName} ✅`)
    } else {
      setLastAction(`${action} - ${elementName} ❌`)
    }
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-lg z-50 bg-white border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          Session Replay Debug
          <Badge variant={isActive ? "destructive" : "secondary"}>
            {isLoading ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin mr-1" />
                Loading...
              </>
            ) : isActive ? (
              "Recording"
            ) : (
              "Stopped"
            )}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span>Initialized:</span>
            <Badge variant={isInitialized ? "default" : "secondary"} className="text-xs">
              {isInitialized ? "✅ Yes" : "❌ No"}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Recording:</span>
            <Badge variant={isActive ? "destructive" : "secondary"} className="text-xs">
              {isActive ? "🔴 Active" : "⚫ Inactive"}
            </Badge>
          </div>
          {currentTrigger && (
            <div className="text-xs text-gray-600">
              Current Trigger: <span className="font-mono">{currentTrigger}</span>
            </div>
          )}
        </div>

        {lastAction && (
          <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
            Last: <span className="font-mono">{lastAction}</span>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAction("start", "debug_manual")}
            disabled={!isInitialized || isActive || isLoading}
          >
            {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Start"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAction("stop", "debug_manual")}
            disabled={!isInitialized || !isActive || isLoading}
          >
            {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Stop"}
          </Button>
        </div>

        {!isInitialized && (
          <div className="text-xs text-amber-600 p-2 bg-amber-50 rounded">
            ⚠️ Plugin not initialized yet. Check your Amplitude API key.
          </div>
        )}

        <div className="text-xs text-gray-500 p-2 bg-blue-50 rounded">
          💡 Session Replay uses amplitude.add() and amplitude.remove() to control recording
        </div>
      </CardContent>
    </Card>
  )
}
