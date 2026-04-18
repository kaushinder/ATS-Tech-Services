import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Award,
  Users,
  Globe,
  Heart,
  Target,
  Zap,
  CheckCircle,
  Star,
  Lightbulb,
  Shield,
} from "lucide-react";

const team = [
  {
    name: "Sanjiv Rajan",
    role: "Chief Executive Officer",
    initials: "SR",
    bio: "20+ years of technology leadership, driving innovation across global markets.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    initials: "PS",
    bio: "Expert in cloud architecture and AI, leading our technology strategy.",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    initials: "DK",
    bio: "Full-stack visionary with a passion for scalable, clean code.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Anya Patel",
    role: "Head of Design",
    initials: "AP",
    bio: "Design thinker creating experiences that users truly love.",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Robert Chen",
    role: "Head of Delivery",
    initials: "RC",
    bio: "Ensures every project is delivered on time, on budget, to perfection.",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    initials: "SJ",
    bio: "Driving growth through data-driven marketing and brand storytelling.",
    color: "from-rose-500 to-pink-600",
  },
];

const milestones = [
  { year: "2005", event: "Founded in Gurugram with a team of 5" },
  { year: "2008", event: "Expanded to 100+ team members, first US client" },
  { year: "2012", event: "Opened offices in the US and UK" },
  { year: "2015", event: "Reached 500+ projects milestone" },
  { year: "2018", event: "Launched AI & Cloud practice, 3000+ projects" },
  { year: "2022", event: "1000+ team, 38 countries, Clutch Top 1000" },
  { year: "2025", event: "5400+ projects, expanding to APAC markets" },
];

const values = [
  {
    icon: Heart,
    title: "Client-First",
    desc: "Your success is our success. Every decision we make is guided by your business goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Transparent communication, honest pricing, and ethical practices — always.",
  },
  {
    icon: Zap,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in code quality, design, and delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work as an extension of your team, not just a vendor.",
  },
  {
    icon: Globe,
    title: "Impact",
    desc: "We strive to create technology that makes a meaningful difference in the world.",
  },
];

const awards = [
  { name: "Clutch Top 1000", year: "2024" },
  { name: "GoodFirms Top Company", year: "2024" },
  { name: "ISO 9001:2015 Certified", year: "2023" },
  { name: "Microsoft Gold Partner", year: "2023" },
  { name: "Google Cloud Partner", year: "2022" },
  { name: "AWS Select Partner", year: "2022" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="page-about">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 text-white" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                19 Years of Building Digital Futures
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Founded in 2005 in Gurugram, India, Ats-tech Services has grown from a small web
                development agency to a global technology partner trusted by 1200+ businesses
                across 38+ countries.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  ISO 9001:2015 Certified
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  CMM Level 3
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  GDPR Compliant
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "19+", label: "Years Experience" },
                { value: "5400+", label: "Projects Delivered" },
                { value: "1200+", label: "Happy Clients" },
                { value: "38+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold font-heading text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white" data-testid="section-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To empower businesses worldwide with innovative, reliable, and scalable technology
                solutions that drive digital transformation and create lasting value.
              </p>
            </div>
            <div className="bg-gray-950 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the world's most trusted technology partner — the company that ambitious
                businesses choose when they want to build the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
                  data-testid={`card-value-${val.title.toLowerCase()}`}
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white" data-testid="section-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              Meet the Visionaries
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              A diverse, seasoned team united by a passion for building exceptional technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all"
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-0.5">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-950" data-testid="section-timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-900/50 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
              19 Years of Growth
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-900" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start" data-testid={`timeline-${m.year}`}>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 flex-1 border border-gray-800">
                    <span className="text-blue-400 font-bold text-sm">{m.year}</span>
                    <p className="text-gray-300 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white" data-testid="section-awards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900">Recognition & Certifications</h2>
            <p className="text-gray-600 mt-2">Industry validation of our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {awards.map((award) => (
              <div
                key={award.name}
                className="border border-gray-100 rounded-2xl p-4 text-center hover:border-blue-200 hover:shadow-md transition-all"
                data-testid={`card-award-${award.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-gray-900 font-semibold text-xs leading-tight mb-1">{award.name}</p>
                <p className="text-gray-500 text-xs">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">
            Join 1200+ Businesses That Trust Us
          </h2>
          <p className="text-blue-100 mb-6">Let's talk about how we can help your business grow.</p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
