import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  MessageSquare,
  Globe,
} from "lucide-react";

const offices = [
  {
    city: "Gurugram, India",
    address: "Plot No. 56, Sector 18, Gurugram, Haryana 122015",
    phone: "+91 124 456 7890",
    email: "india@ats-techservices.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
    flag: "🇮🇳",
  },
  {
    city: "New York, USA",
    address: "350 5th Ave, Suite 5800, New York, NY 10118",
    phone: "+1 800 123 4567",
    email: "usa@ats-techservices.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM EST",
    flag: "🇺🇸",
  },
  {
    city: "London, UK",
    address: "1 Canada Square, Canary Wharf, London E14 5AB",
    phone: "+44 20 7946 0958",
    email: "uk@ats-techservices.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
    flag: "🇬🇧",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "AI & ML Development",
  "Digital Marketing",
  "E-commerce Development",
  "Other",
];

const budgets = [
  "Less than $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not Sure Yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white" data-testid="page-contact">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 text-white" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Let's Build Together
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Share your idea and get a free consultation. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              NDA Protected
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              24-Hour Response
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white" data-testid="section-contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-1">
                  Get a Free Quote
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Tell us about your project and we'll craft a custom proposal.
                </p>

                {submitted ? (
                  <div className="text-center py-12" data-testid="form-success">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" }); }}
                      className="mt-6 text-blue-600 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                          data-testid="select-service"
                        >
                          <option value="">Select a Service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                          data-testid="select-budget"
                        >
                          <option value="">Select Budget Range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Project Description *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                      data-testid="button-submit"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      By submitting, you agree to our Privacy Policy. Your data is NDA-protected.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Quick Contact */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Quick Connect</h3>
                <div className="space-y-3">
                  <a href="mailto:info@ats-techservices.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200">Email Us</p>
                      <p className="text-sm font-medium">info@ats-techservices.com</p>
                    </div>
                  </a>
                  <a href="tel:+18001234567" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200">Call Us</p>
                      <p className="text-sm font-medium">+1 800 123 4567</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200">Response Time</p>
                      <p className="text-sm font-medium">Within 24 Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200">Live Chat</p>
                      <p className="text-sm font-medium">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="border border-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Why Work With Us</h3>
                <ul className="space-y-2">
                  {[
                    "Free project estimation",
                    "Dedicated project manager",
                    "Agile development process",
                    "Regular progress updates",
                    "Post-launch support",
                    "100% money-back guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50" data-testid="section-offices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">Our Global Offices</h2>
            <p className="text-gray-600 mt-1">Serving clients worldwide from 3 continents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all"
                data-testid={`card-office-${office.city.toLowerCase().replace(/[\s,]+/g, '-')}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  <h3 className="font-bold text-gray-900">{office.city}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-blue-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden" data-testid="section-map">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <Globe className="w-16 h-16 text-blue-400/50" />
          <p className="text-white/60 text-sm">Global Presence Across 38+ Countries</p>
        </div>
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }} />
      </section>

      <Footer />
    </div>
  );
}
