"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"

const services = [
  "Ocean Freight",
  "Air Freight",
  "Land Transport",
  "Customs Clearance",
  "Documentation",
  "Cargo Insurance",
  "Warehousing",
  "Supply Chain Consulting",
]

const urgencyLevels = [
  { value: "low", label: "Standard (5-7 days)" },
  { value: "medium", label: "Priority (2-3 days)" },
  { value: "high", label: "Urgent (24-48 hours)" },
  { value: "critical", label: "Critical (Same day)" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    service: "",
    urgency: "",
    origin: "",
    destination: "",
    cargoType: "",
    estimatedValue: "",
    message: "",
    newsletter: false,
    terms: false,
  })
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours with a customized quote.",
    })
  }

  if (isSubmitted) {
    return (
      <Card className="bg-primary/5 border-primary/20 animate-scale-in">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-bounce-subtle">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Thank you for your inquiry!</h3>
              <p className="text-muted-foreground">
                We've received your message and will respond within 24 hours with a customized solution.
              </p>
            </div>
            <Button
              variant="outline"
              className="hover-lift bg-transparent"
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  company: "",
                  position: "",
                  service: "",
                  urgency: "",
                  origin: "",
                  destination: "",
                  cargoType: "",
                  estimatedValue: "",
                  message: "",
                  newsletter: false,
                  terms: false,
                })
              }}
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="animate-fade-in-up hover-lift">
      <CardHeader>
        <CardTitle>Request a Quote</CardTitle>
        <CardDescription>
          Provide details about your shipping needs and we'll create a customized solution for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="focus-enhanced transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="focus-enhanced transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="focus-enhanced transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="focus-enhanced transition-all duration-200"
              />
            </div>
          </div>

          {/* Company Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                Company Name *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="focus-enhanced transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position" className="text-sm font-medium">
                Your Position
              </Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
                className="focus-enhanced transition-all duration-200"
              />
            </div>
          </div>

          {/* Service Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium">
                Service Needed *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="focus-enhanced transition-all duration-200">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency" className="text-sm font-medium">
                Urgency Level
              </Label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                <SelectTrigger className="focus-enhanced transition-all duration-200">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="origin" className="text-sm font-medium">
                Origin Country/Port
              </Label>
              <Input
                id="origin"
                value={formData.origin}
                onChange={(e) => handleInputChange("origin", e.target.value)}
                placeholder="e.g., Shanghai, China"
                className="focus-enhanced transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium">
                Destination Country/Port
              </Label>
              <Input
                id="destination"
                value={formData.destination}
                onChange={(e) => handleInputChange("destination", e.target.value)}
                placeholder="e.g., Los Angeles, USA"
                className="focus-enhanced transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="cargoType" className="text-sm font-medium">
                Cargo Type
              </Label>
              <Input
                id="cargoType"
                value={formData.cargoType}
                onChange={(e) => handleInputChange("cargoType", e.target.value)}
                placeholder="e.g., Electronics, Textiles, Machinery"
                className="focus-enhanced transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimatedValue" className="text-sm font-medium">
                Estimated Value (USD)
              </Label>
              <Input
                id="estimatedValue"
                value={formData.estimatedValue}
                onChange={(e) => handleInputChange("estimatedValue", e.target.value)}
                placeholder="e.g., $50,000"
                className="focus-enhanced transition-all duration-200"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Additional Details
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Please provide any additional information about your shipment requirements, special handling needs, or specific questions..."
              rows={4}
              className="focus-enhanced transition-all duration-200 resize-none"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                className="mt-0.5"
              />
              <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                Subscribe to our newsletter for industry insights and updates
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                className="mt-0.5"
                required
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the Terms of Service and Privacy Policy *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full hover-lift" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
