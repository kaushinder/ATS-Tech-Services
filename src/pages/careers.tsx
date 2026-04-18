import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Heart,
  Zap,
  Users,
  Globe,
  GraduationCap,
  Trophy,
  Search,
} from "lucide-react";

const jobs = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Gurugram, India / Remote",
    type: "Full-Time",
    experience: "4-7 Years",
    salary: "₹18L - ₹30L",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Flutter Developer",
    department: "Mobile",
    location: "Gurugram, India",
    type: "Full-Time",
    experience: "2-5 Years",
    salary: "₹12L - ₹22L",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-Time",
    experience: "3-6 Years",
    salary: "₹15L - ₹28L",
    tags: ["AWS", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Gurugram, India",
    type: "Full-Time",
    experience: "3-5 Years",
    salary: "₹10L - ₹20L",
    tags: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    title: "Python ML Engineer",
    department: "AI & ML",
    location: "Gurugram, India / Remote",
    type: "Full-Time",
    experience: "3-6 Years",
    salary: "₹18L - ₹32L",
    tags: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    title: "Project Manager",
    department: "Delivery",
    location: "Gurugram, India",
    type: "Full-Time",
    experience: "5-8 Years",
    salary: "₹15L - ₹25L",
    tags: ["Agile", "Scrum", "PMP"],
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "USA (Remote)",
    type: "Full-Time",
    experience: "4-7 Years",
    salary: "$80K - $120K",
    tags: ["B2B Sales", "IT Services", "CRM"],
  },
  {
    title: "QA Automation Engineer",
    department: "Quality",
    location: "Gurugram, India",
    type: "Full-Time",
    experience: "2-5 Years",
    salary: "₹8L - ₹18L",
    tags: ["Selenium", "Cypress", "Jest"],
  },
];

const perks = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "₹50,000 annual learning budget, online courses, certifications, and conference passes.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance for you and your family, gym membership, mental health support.",
  },
  {
    icon: Globe,
    title: "Work Flexibility",
    desc: "Hybrid and remote-first options, flexible hours, and 25+ days of paid leave annually.",
  },
  {
    icon: Trophy,
    title: "Recognition & Rewards",
    desc: "Quarterly bonuses, performance awards, Employee of the Year, and spot rewards.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Work",
    desc: "Work on challenging projects with the latest technologies for global clients.",
  },
  {
    icon: Users,
    title: "Great Culture",
    desc: "Collaborative, inclusive environment with team outings, hackathons, and tech talks.",
  },
];

const departments = ["All", "Engineering", "Mobile", "AI & ML", "Design", "Infrastructure", "Sales", "Quality", "Delivery"];

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = jobs.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchDept = dept === "All" || j.department === dept;
    return matchSearch && matchDept;
  });

  return (
    <div className="min-h-screen bg-white" data-testid="page-careers">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 text-white" data-testid="section-careers-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Build the Future With Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Join 1200+ talented engineers, designers, and strategists at a company where your work
            impacts millions of users worldwide.
          </p>
          <div className="flex justify-center gap-8 text-sm text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1200+</div>
              <div>Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">38+</div>
              <div>Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.7★</div>
              <div>Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white" data-testid="section-perks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Life at Ats-tech Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              Why You'll Love Working Here
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
                  data-testid={`card-perk-${perk.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 bg-gray-50" data-testid="section-jobs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900">Open Positions</h2>
            <p className="text-gray-600 mt-2">Find your next challenge and grow with us</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by role or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                data-testid="input-job-search"
              />
            </div>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              data-testid="select-department"
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-md transition-all group"
                data-testid={`card-job-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-blue-600 text-xs font-medium">{job.department}</span>
                  </div>
                  <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" /> {job.salary}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-16 text-gray-500">
                No positions found matching your search.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Culture Quote */}
      <section className="py-16 bg-gray-950 text-white text-center" data-testid="section-culture">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-bold font-heading leading-relaxed">
            "We don't just hire talent — we invest in people who want to shape the future of technology."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">PS</div>
            <div className="text-left">
              <p className="font-semibold text-sm">Pankaj Sharma</p>
              <p className="text-gray-500 text-xs">CEO, ATS-Tech Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600" data-testid="section-careers-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">
            Don't See Your Role?
          </h2>
          <p className="text-blue-100 mb-6">Send us your resume — we're always looking for exceptional talent.</p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Send Your Resume
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
