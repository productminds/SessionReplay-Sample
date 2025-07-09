# 🚀 Getting Started

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/productminds/SessionReplay-Sample.git
cd SessionReplay-Sample
```

### 2. Install Dependencies using a package manager

```bash
npm install
# or
yarn install
# or
pnpm install

```
### 4. Amplitude configuration

You're gonna need to set a .env.local variable with the Amplitude Api key for the dependency initialization, or you can hardcode it in its file

### 4. After installing dependencies, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# 🧠 How this custom implementation works:

## 📁 Project Structure

```
app/
├── about/
│ └── page.tsx # About page route -> /about
├── favicon.ico # Favicon for the site
├── globals.css # Global CSS styles
├── layout.tsx # App-wide layout component
└── page.tsx # Home page route -> /

components/
└── ui/
├── badge.tsx # Badge UI component
├── button.tsx # Button UI component
├── card.tsx # Card UI component
├── input.tsx # Input field UI component
├── textarea.tsx # Textarea UI component
├── amplitude-provider.tsx # Wrapper for initializing Amplitude
└── session-replay-debug.tsx # Tool for debugging session replay

hooks/
└── use-session-replay.ts # Custom hook for session replay integration, where the start and stop logic on interaction is located

lib/
├── amplitude.ts # Amplitude configuration and logic
└── utils.ts # Utility functions

public/ # Static assets (e.g. images, icons)

node_modules/ # Installed dependencies

```
---
## 📚 How does Amplitude integrates in this example?


### 📄 Layout.tsx

On the layout we have these two imports located, which are necessary for wrapping the child component and having only one Amplitude instance
The session-replay-debug component is a simple modal that indicates whether the session replay plugin is recording or not, and allows us to start and stop the plugin. It should only be displayed on development environment

```
import AmplitudeProvider from "@/components/amplitude-provider"
import SessionReplayDebug from "@/components/session-replay-debug"

...
return (
    <html lang="en">
      <body>
        <AmplitudeProvider>{children}</AmplitudeProvider>
        {/* Show debug component only in development */}
        {process.env.NODE_ENV === "development" && <SessionReplayDebug />}
      </body>
    </html>
  )
```

### 🔧 AmplitudeProvider.tsx

The AmplitudeProvider component responsibility is just to initialize the Amplitude SDK when the component mounts using useEffect() hook

```
import { initializeAmplitude } from "@/lib/amplitude"

useEffect(() => {
    initializeAmplitude()
  }, [])

  return <>{children}</>
```

### 📊 amplitude.ts

In this file, we have the implementation of Amplitude.
At the start of the file, we define **two very important variables** that will let us manually control when to stop and start recordings for session replay.

`let sessionReplayInstance: any = null`
`let isRecording = false`

The first variable, let us have a reference to the sessionReplayPlugin instance, as Amplitude doesn't provide a method to retrieve this instance.
The second variable responsibility, is to let us know whether the plugin is recording or not, so we can manually control it.

In this file we also define a `trackEvent(eventName, eventProperties)` function, but we also define some controlling functions for session-replay.

Defined functions for session replay:
```
startSessionReplay(elementName)
  # Checks whether the sessionReplayInstance has been created and is NOT recording. If so then:
  # It adds the sessionReplayInstance to the Amplitude Instance
  # It sets 'isRecording' to true
  # Tracks a 'Session Replay Started' Event -> THIS IS COMPLETELY OPTIONAL

stopSessionReplay(elementName)
  # Checks whether the sessionReplayInstance has been created and IS recording. If so then:
  # It removes the sessionReplayInstance from the Amplitude Instance
  # It sets 'isRecording' to false
  # Tracks a 'Session Replay Stopped' Event -> THIS IS COMPLETELY OPTIONAL

isSessionReplayActive()
  # It returns the isRecording variable. true or false.

getSessionReplayStatus()
  # returns this:
  return {
      isInitialized: sessionReplayInstance !== null, -> Boolean, so we know the plugin has been initialized
      isRecording: isRecording -> Boolean, so we know is recording or not.
      instance: sessionReplayInstance, -> The instance of session replay itself.
    }
```

### ⏯️ use-session-replay.ts

First, we import the functions previously defined:
`import { startSessionReplay, stopSessionReplay, isSessionReplayActive, getSessionReplayStatus } from "@/lib/amplitude"`

After that we defined state variables and check the session replay status. 
Notice how it uses the status defined in the previous file mentioned in this document.
```
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

```

Then, we have the most important functions of them all: `handleElementInteraction(elementName, action)` 🔴
This function first checks if the plugin has been initialized or if there's a session replay operation loading already.

Then, it checks on a variable `const currentlyActive = isSessionReplayActive()` if it's already recording or not
Remember that this function is defined in the previous file.
Right after that has a switch statement, on the action received as param. This action can be 'start', 'stop' or 'toggle'
Depending on the action:
  -> If it was 'start', it will check if is already recording, if so, then there's no action to be made. If it's not recording, then it starts the plugin
  -> If it was 'stop', it will check if is already stopped, if so, then there's no action to be made. If it's recording, then it stops the plugin
  -> If it was 'toggle', it will check the current status and change it to the other one. From stop -> start, and vice versa.

```
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
```
Right at the end of the file, there are some extra functions defined that basically call `handleElementInteraction(elementName, action)`
with different actions each, being the actions 'start', 'stop', and 'toggle' respectively.
Functions:
```
startReplayOnInteraction(elementName)
stopReplayOnInteraction(elementName)
toggleReplayOnInteraction(elementName)
```

Right at the end, the hook returns this:
```
return {
    startReplayOnInteraction,
    stopReplayOnInteraction,
    toggleReplayOnInteraction,
    isActive,
    isInitialized,
    isLoading,
    currentTrigger: currentTriggerRef.current,
  }
```

## ❓ How is this hook actually used?

### about/page.tsx

We have a form that whenever is focused we call `startReplayOnInteraction`. It's very important to have a state variable to control whether it is already focused or not, otherwise there might be an error when the form submits, where after submission and sessio replay plugin stopped, the form will still be focused, so the plugin will start again. To handle this, we've defined a state variable named formFocused to handle that.
When the form is submitted, we call the  `stopReplayOnInteraction` function, and then it stops the plugin.

**This Implementation assumes the user will only submit the form once on that session, as it won't be able to track a session replay again due to that state formFocused variable**

```
<form
  className="space-y-4"
  onFocus={() => {
    if(!formFocused){
      // Start recording when user focuses on the newsletter form
      startReplayOnInteraction("newsletter_form_focus")
      setFormFocused(true);
      }
    }}
  onSubmit={(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      company: formData.get("company"),
    }
  
      // Track the newsletter subscription
      trackEvent("Newsletter Subscribed", {
        page: "about",
        hasCompany: !!data.company,
        source: "about_page",
        session_replay_active: isActive,
      })
  
      alert("Newsletter subscription successful! Session replay stopped. Check console for tracking event.")
  
      // Stop recording after newsletter subscription
      stopReplayOnInteraction("newsletter_submit")
  
      console.log("Newsletter data:", data)
  }}
  ... rest of the code ...
```

Then, some badges on the form UI will let you toggle the plugin 'started and stopped' just to see how that toggle function actually works
```
<Badge
  variant="outline"
  className="cursor-pointer hover:bg-purple-50"
  onClick={() => {
    trackEvent("Interest Badge Clicked", { interest: "Technology Trends", page: "about" })
    toggleReplayOnInteraction("interest_technology_trends")
  }}
>
```










