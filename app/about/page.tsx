"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Zap } from "lucide-react"
import { trackEvent } from "@/lib/amplitude"
import { useSessionReplay } from "@/hooks/use-session-replay"
import { useState } from "react"

export default function AboutPage() {
  const { startReplayOnInteraction, stopReplayOnInteraction, toggleReplayOnInteraction, isActive, isInitialized } =
    useSessionReplay()
  const [formFocused, setFormFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
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
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">About Our Company</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">We're Building the Future of Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, we've helped over 500 companies transform their operations and achieve unprecedented growth
            through cutting-edge technology solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Stay Updated with Our Latest Insights</h3>
            <p className="text-lg text-gray-600">
              Join thousands of business leaders who receive our weekly newsletter packed with industry insights, tips,
              and exclusive updates.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Industry Insights</h4>
                  <p className="text-sm text-gray-600">Latest trends and analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Success Stories</h4>
                  <p className="text-sm text-gray-600">Real client case studies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Best Practices</h4>
                  <p className="text-sm text-gray-600">Proven strategies that work</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Exclusive Updates</h4>
                  <p className="text-sm text-gray-600">First access to new features</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
              <CardDescription>
                Get weekly insights delivered straight to your inbox. No spam, unsubscribe anytime.
              </CardDescription>

              {/* Session Replay Status */}
              <div className="flex items-center gap-2 mt-2">
                <div className={`w-2 h-2 rounded-full ${isActive ? "bg-red-500 animate-pulse" : "bg-gray-300"}`}></div>
                <span className="text-xs text-gray-500">
                  {!isInitialized
                    ? "Session replay initializing..."
                    : isActive
                      ? "Session recording active"
                      : "Session recording inactive"}
                </span>
              </div>
            </CardHeader>
            <CardContent>
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

                  // Here you would normally send the data to your backend
                  alert("Newsletter subscription successful! Session replay stopped. Check console for tracking event.")

                  // Stop recording after newsletter subscription
                  stopReplayOnInteraction("newsletter_submit")

                  console.log("Newsletter data:", data)
                }}
              >
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="text-lg py-3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="firstName" placeholder="First Name" required />
                  <Input
                    name="lastName" placeholder="Last Name" required />
                </div>
                <div>
                  <Input
                    name="company" placeholder="Company (Optional)" />
                </div>

                {/* Preferences */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">What interests you most?</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-50"
                      onClick={() => {
                        trackEvent("Interest Badge Clicked", { interest: "Technology Trends", page: "about" })
                        toggleReplayOnInteraction("interest_technology_trends")
                      }}
                    >
                      Technology Trends
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-50"
                      onClick={() => {
                        trackEvent("Interest Badge Clicked", { interest: "Business Strategy", page: "about" })
                        toggleReplayOnInteraction("interest_business_strategy")
                      }}
                    >
                      Business Strategy
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-50"
                      onClick={() => {
                        trackEvent("Interest Badge Clicked", { interest: "Case Studies", page: "about" })
                        toggleReplayOnInteraction("interest_case_studies")
                      }}
                    >
                      Case Studies
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-50"
                      onClick={() => {
                        trackEvent("Interest Badge Clicked", { interest: "Product Updates", page: "about" })
                        toggleReplayOnInteraction("interest_product_updates")
                      }}
                    >
                      Product Updates
                    </Badge>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                  Subscribe Now
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that every business deserves access to world-class technology solutions. Our mission is to
            democratize innovation by providing cutting-edge tools and expert guidance that help companies of all sizes
            achieve their full potential and create lasting impact in their industries.
          </p>
        </div>
      </section>
    </div>
  )
}
