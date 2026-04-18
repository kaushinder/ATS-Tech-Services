import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Award,
  Zap,
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  TrendingUp,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";

const stats = [
  { value: 19, suffix: "+", label: "Years of Experience" },
  { value: 5400, suffix: "+", label: "Projects Delivered" },
  { value: 38, suffix: "+", label: "Countries Served" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for superior performance and user experience.",
    color: "bg-blue-500",
    tags: ["React", "Node.js", "Python"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional experiences on iOS and Android.",
    color: "bg-purple-500",
    tags: ["Flutter", "React Native", "Swift"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality to create memorable digital experiences.",
    color: "bg-pink-500",
    tags: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to power your business growth.",
    color: "bg-cyan-500",
    tags: ["AWS", "Azure", "Google Cloud"],
  },
  {
    icon: Brain,
    title: "AI & ML Development",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning to automate and innovate.",
    color: "bg-orange-500",
    tags: ["TensorFlow", "PyTorch", "OpenAI"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that grow your online presence and deliver measurable ROI.",
    color: "bg-green-500",
    tags: ["SEO", "PPC", "Content"],
  },
];

const testimonials = [
  {
    name: "James Anderson",
    role: "CTO, TechVentures Inc.",
    avatar: "JA",
    rating: 5,
    text: "Ats-tech Services delivered our project on time and exceeded expectations. Their team's technical expertise and communication were outstanding throughout the entire process.",
    company: "TechVentures",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, StyleBoutique",
    avatar: "SM",
    rating: 5,
    text: "The mobile app they built for us increased our customer engagement by 180%. The UI/UX design is beautiful and our users love it. Highly recommended!",
    company: "StyleBoutique",
  },
  {
    name: "Michael Chen",
    role: "CEO, DataStream Pro",
    avatar: "MC",
    rating: 5,
    text: "Working with Ats-tech Services was a game-changer. They transformed our legacy system into a modern cloud-based platform. Professional, efficient, and skilled.",
    company: "DataStream",
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager, HealthCare+",
    avatar: "ER",
    rating: 5,
    text: "Their AI integration completely transformed our product. The team was responsive, knowledgeable, and delivered a solution that's now central to our business.",
    company: "HealthCare+",
  },
];

const clientLogos = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Salesforce",
  "IBM",
  "Oracle",
  "SAP",
  "Dell",
  "HP",
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS", color: "#FF9900" },
  { name: "Flutter", color: "#02569B" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Next.js", color: "#000000" },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "19+ years of delivering successful projects across industries globally.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "1200+ skilled developers, designers, and strategists at your service.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% of projects delivered on time with transparent communication.",
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description: "Iterative development process ensuring flexibility and rapid delivery.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients in 38+ countries with 24/7 support across time zones.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized by Clutch, GoodFirms, and other industry authorities.",
  },
];

const portfolioItems = [
  {
    category: "E-commerce",
    title: "ShopEase Platform",
    description: "A comprehensive e-commerce solution with AI recommendations",
    gradient: "from-blue-500 to-purple-600",
    tags: ["React", "Node.js", "ML"],
  },
  {
    category: "Healthcare",
    title: "MediConnect App",
    description: "Telehealth platform connecting patients with doctors",
    gradient: "from-green-500 to-teal-600",
    tags: ["Flutter", "AWS", "HIPAA"],
  },
  {
    category: "FinTech",
    title: "PayFlow Dashboard",
    description: "Real-time financial analytics and payment processing",
    gradient: "from-orange-500 to-red-600",
    tags: ["React", "Python", "Charts"],
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="page-home">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden" data-testid="section-hero">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Trusted by 1200+ Businesses Worldwide
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
                Building Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Excellence
                </span>
                for 19+ Years
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                From web & mobile apps to AI solutions and cloud infrastructure — we deliver
                transformative technology that drives real business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact">
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                    data-testid="button-hero-cta"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button
                    className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all hover:bg-white/10"
                    data-testid="button-hero-portfolio"
                  >
                    <Play className="w-4 h-4" />
                    View Portfolio
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No Hidden Costs
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  NDA Protected
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  100% Satisfaction
                </div>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="hidden lg:block relative">
              <div className="relative w-full h-96">
                {/* Main card */}
                <div className="absolute top-0 right-0 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-400 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Project Delivered</p>
                      <p className="text-white/60 text-xs">ShopEase Platform</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-white/80 text-xs ml-1">5.0 Rating</span>
                  </div>
                </div>

                {/* Stats card */}
                <div className="absolute bottom-0 left-0 w-60 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                  <p className="text-white/70 text-xs mb-3">Project Success Rate</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">98%</span>
                    <span className="text-green-400 text-sm mb-1">↑ Success</span>
                  </div>
                  <div className="mt-3 h-2 bg-white/20 rounded-full">
                    <div className="h-full w-[98%] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                  </div>
                </div>

                {/* Tech badge */}
                <div className="absolute top-1/2 left-1/4 w-48 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-2xl p-4 shadow-xl">
                  <p className="text-white/80 text-xs mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-1">
                    {["React", "AWS", "AI", "Node"].map((t) => (
                      <span key={t} className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 960 10 720 40C480 70 240 10 0 40V80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-4xl md:text-5xl font-bold font-heading text-blue-600 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden" data-testid="section-clients">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Trusted by Global Brands</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex gap-16 whitespace-nowrap" style={{ width: "200%" }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <span
                key={i}
                className="inline-flex items-center text-gray-400 font-bold text-lg hover:text-gray-600 transition-colors cursor-default"
                data-testid={`client-logo-${i}`}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Full-Spectrum Digital Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end technology solutions designed to transform your business and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card-hover group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-blue-200 cursor-pointer"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="bg-gray-50 text-gray-500 text-xs px-2.5 py-1 rounded-full border">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md"
                data-testid="button-view-all-services"
              >
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-950" data-testid="section-why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-900/50 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                Why Ats-tech Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Your Trusted Technology Partner
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We combine technical excellence with business acumen to deliver solutions that don't
                just work — they drive real results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChooseUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3" data-testid={`why-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Client Satisfaction", value: 98 },
                { label: "On-Time Delivery", value: 96 },
                { label: "Project Success Rate", value: 99 },
                { label: "Code Quality", value: 97 },
              ].map((item) => (
                <div key={item.label} data-testid={`progress-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-blue-400 font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white" data-testid="section-portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Projects That Define Excellence
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A glimpse of what we've built for clients across industries and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                data-testid={`card-portfolio-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 border border-t-0 border-gray-100 rounded-b-2xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio">
              <button
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all"
                data-testid="button-view-portfolio"
              >
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50" data-testid="section-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
              Technologies We Master
            </h2>
            <p className="text-gray-600 mt-2">Cutting-edge tools powering world-class solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl px-4 py-2.5 cursor-default transition-all card-hover"
                data-testid={`badge-tech-${tech.name.toLowerCase()}`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg" data-testid="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors"
                data-testid="button-testimonial-prev"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`transition-all rounded-full ${
                      i === activeTestimonial ? "w-6 h-2.5 bg-blue-600" : "w-2.5 h-2.5 bg-gray-300"
                    }`}
                    data-testid={`button-testimonial-dot-${i}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors"
                data-testid="button-testimonial-next"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Share your idea and get a free consultation with our experts. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                data-testid="button-cta-contact"
              >
                Start a Conversation
              </button>
            </Link>
            <a
              href="tel:+18001234567"
              className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              data-testid="link-cta-phone"
            >
              <Phone className="w-4 h-4" />
              +1 800 123 4567
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-blue-100 text-sm">
            {["Free Consultation", "NDA Protected", "48-Hour Response", "Expert Team"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-16 bg-gray-50" data-testid="section-blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">Latest Insights</h2>
              <p className="text-gray-600 mt-1">Stay ahead with our latest thinking</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all">
              View All Posts <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "AI & ML",
                title: "How AI is Transforming Software Development in 2025",
                desc: "Explore the latest trends in AI-assisted coding, testing, and deployment pipelines.",
                date: "Apr 10, 2025",
                readTime: "5 min read",
              },
              {
                tag: "Mobile",
                title: "Flutter vs React Native: Which to Choose in 2025",
                desc: "A comprehensive comparison of the two leading cross-platform frameworks.",
                date: "Apr 5, 2025",
                readTime: "7 min read",
              },
              {
                tag: "Cloud",
                title: "Cloud Migration Best Practices for Enterprise Apps",
                desc: "A step-by-step guide to migrating complex enterprise systems to the cloud.",
                date: "Mar 28, 2025",
                readTime: "6 min read",
              },
            ].map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover cursor-pointer group"
                data-testid={`card-blog-${i}`}
              >
                <div className="h-40 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <MessageSquare className="w-10 h-10 text-blue-300" />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                    {post.tag}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{post.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Bar */}
      <section className="py-10 bg-gray-900" data-testid="section-contact-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300">
            <p className="text-sm">Have a question? Reach out to us anytime.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="mailto:info@ats-techservices.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                info@ats-techservices.com
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                +1 800 123 4567
              </a>
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
