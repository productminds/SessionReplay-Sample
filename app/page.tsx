"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/amplitude"
import { useSessionReplay } from "@/hooks/use-session-replay"
import { useState } from "react"

export default function HomePage() {
  const { startReplayOnInteraction, stopReplayOnInteraction, isActive, isInitialized, isLoading } = useSessionReplay()
  const [formFocused, setFormFocused] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">YourBrand</h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with Our Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help companies streamline their operations and achieve remarkable growth through innovative technology
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700"
                disabled={isLoading}
                onClick={async () => {
                  trackEvent("CTA Button Clicked", { button: "Get Started Today", page: "home" })
                  await startReplayOnInteraction("cta_get_started")
                }}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                disabled={isLoading}
                onClick={async () => {
                  trackEvent("CTA Button Clicked", { button: "Learn More", page: "home" })
                  await stopReplayOnInteraction("cta_learn_more")
                }}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Learn More
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Ready to transform your business? Send us a message and we'll get back to you within 24 hours.
              </CardDescription>

              {/* Session Replay Controls */}
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => await startReplayOnInteraction("contact_form")}
                  className={`${isActive ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}
                  disabled={!isInitialized || isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-3 h-3 animate-spin mr-1" />
                  ) : isActive ? (
                    "🔴 Recording..."
                  ) : (
                    "▶️ Start Recording"
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => await stopReplayOnInteraction("contact_form")}
                  disabled={!isInitialized || !isActive || isLoading}
                >
                  {isLoading ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : "⏹️ Stop Recording"}
                </Button>
                {!isInitialized && <span className="text-xs text-amber-600 self-center">Plugin loading...</span>}
              </div>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onFocus={async () => {
                  if(!formFocused){
                    // Start recording when user focuses on the contact form
                    startReplayOnInteraction("contact_form_focus")
                    setFormFocused(true);
                    console.log("Form focused got: ", formFocused);
                  }
                }}
                onSubmit={async (e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const data = {
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName"),
                    email: formData.get("email"),
                    company: formData.get("company"),
                    message: formData.get("message"),
                  }

                  // Track the form submission
                  trackEvent("Contact Form Submitted", {
                    page: "home",
                    hasCompany: !!data.company,
                    messageLength: data.message?.toString().length || 0,
                    session_replay_active: isActive,
                  })

                  // Stop recording after form submission
                  await stopReplayOnInteraction("contact_form_submit")

                  // Here you would normally send the data to your backend
                  alert("Form submitted! Session replay stopped. Check console for tracking event.")
                  console.log("Form data:", data)
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input name="firstName" placeholder="First Name" required />
                  </div>
                  <div>
                    <Input name="lastName" placeholder="Last Name" required />
                  </div>
                </div>
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="company" placeholder="Company Name" />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[100px]"
                  required
                />
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver results that matter to your business growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-indigo-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-600">Round-the-clock assistance whenever you need it.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-indigo-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
            <p className="text-gray-600">Experienced professionals dedicated to your success.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-indigo-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
            <p className="text-gray-600">Serving clients worldwide with local expertise.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
