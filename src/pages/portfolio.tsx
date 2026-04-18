import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Globe, Star, ArrowRight, ExternalLink } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "E-commerce",
  "FinTech",
  "Healthcare",
  "AI & ML",
  "SaaS",
];

const projects = [
  {
    title: "ShopEase Platform",
    category: "E-commerce",
    client: "ShopEase Inc.",
    desc: "A comprehensive e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless multi-payment gateway integration.",
    gradient: "from-blue-500 to-purple-600",
    tags: ["React", "Node.js", "ML", "MongoDB"],
    results: "+180% conversion, 2M+ users",
    industry: "Retail",
  },
  {
    title: "MediConnect Telehealth",
    category: "Healthcare",
    client: "HealthTech Corp",
    desc: "HIPAA-compliant telehealth platform connecting 50,000+ patients with licensed doctors via video consultation and AI symptom checker.",
    gradient: "from-green-500 to-teal-600",
    tags: ["Flutter", "AWS", "WebRTC", "AI"],
    results: "50K+ consultations/month",
    industry: "Healthcare",
  },
  {
    title: "PayFlow Dashboard",
    category: "FinTech",
    client: "PayFlow Ltd.",
    desc: "Real-time financial analytics dashboard with predictive forecasting, fraud detection, and multi-currency payment processing.",
    gradient: "from-orange-500 to-red-600",
    tags: ["React", "Python", "ML", "Stripe"],
    results: "$2B+ processed, 99.9% uptime",
    industry: "Finance",
  },
  {
    title: "LearnHub LMS",
    category: "SaaS",
    client: "EdTech Ventures",
    desc: "Next-gen learning management system with adaptive curriculum, live classes, and personalized learning paths for K-12 students.",
    gradient: "from-violet-500 to-purple-600",
    tags: ["Next.js", "GraphQL", "WebSockets"],
    results: "500K+ students, 95 NPS",
    industry: "Education",
  },
  {
    title: "LogiTrack Supply Chain",
    category: "Web Development",
    client: "Global Logistics Co.",
    desc: "End-to-end supply chain visibility platform with IoT integration, real-time tracking, and predictive maintenance.",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["React", "IoT", "Azure", "Charts"],
    results: "35% cost reduction",
    industry: "Logistics",
  },
  {
    title: "FitPulse Wellness App",
    category: "Mobile App",
    client: "WellnessTech",
    desc: "AI-powered fitness and wellness app with personalized workout plans, nutrition tracking, and wearable integration.",
    gradient: "from-rose-500 to-pink-600",
    tags: ["React Native", "AI", "HealthKit"],
    results: "4.8★, 1M+ downloads",
    industry: "Health & Fitness",
  },
  {
    title: "PropVerse Real Estate",
    category: "Web Development",
    client: "PropVerse",
    desc: "Virtual property marketplace with 3D tours, AI price prediction, and automated mortgage qualification.",
    gradient: "from-amber-500 to-orange-600",
    tags: ["React", "Three.js", "AI", "AWS"],
    results: "$500M+ listings managed",
    industry: "Real Estate",
  },
  {
    title: "CryptoVault Exchange",
    category: "FinTech",
    client: "CryptoVault",
    desc: "High-frequency crypto trading platform with advanced charting, algorithmic trading, and cold storage integration.",
    gradient: "from-indigo-500 to-blue-700",
    tags: ["React", "WebSockets", "Go", "Blockchain"],
    results: "100K+ traders, $1B volume",
    industry: "Crypto",
  },
  {
    title: "FoodieGo Delivery",
    category: "Mobile App",
    client: "FoodieGo",
    desc: "On-demand food delivery super-app with real-time tracking, smart routing, and restaurant management system.",
    gradient: "from-yellow-500 to-orange-500",
    tags: ["Flutter", "Firebase", "Google Maps"],
    results: "10K+ restaurants, 5M orders",
    industry: "Food & Beverage",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white" data-testid="page-portfolio">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 text-white" data-testid="section-portfolio-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            5400+ Projects. Real Results.
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From startups to Fortune 500 companies — a selection of projects where we turned
            ambitious ideas into industry-leading digital products.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30" data-testid="section-portfolio-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50" data-testid="section-projects-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
                data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                  <Globe className="w-14 h-14 text-white/30" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{project.category}</span>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-50 text-gray-500 text-xs px-2 py-0.5 rounded-full border">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <span className="text-green-600 text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-green-500 text-green-500" />
                      {project.results}
                    </span>
                    <button className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      View Case Study <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white" data-testid="section-portfolio-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5400+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "38+", label: "Industries Served" },
              { value: "$50M+", label: "Revenue Generated for Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold font-heading mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950 text-white" data-testid="section-portfolio-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-6">Let's discuss how we can bring your vision to life.</p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
