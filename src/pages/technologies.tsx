import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-500",
    techs: [
      { name: "React.js", desc: "Component-based UI library for fast, interactive web apps." },
      { name: "Next.js", desc: "Full-stack React framework with SSR and static generation." },
      { name: "Angular", desc: "Enterprise-grade framework by Google for scalable apps." },
      { name: "Vue.js", desc: "Progressive framework for building user interfaces." },
      { name: "TypeScript", desc: "Typed JavaScript for safer, more maintainable code." },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development." },
    ],
  },
  {
    name: "Backend",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-500",
    techs: [
      { name: "Node.js", desc: "Event-driven JavaScript runtime for scalable network apps." },
      { name: "Python", desc: "Versatile language powering web, AI, and data science." },
      { name: "Go (Golang)", desc: "High-performance language for concurrent systems." },
      { name: "Java", desc: "Enterprise-grade language for robust backend systems." },
      { name: "Laravel (PHP)", desc: "Elegant PHP framework with expressive syntax." },
      { name: "Ruby on Rails", desc: "Convention-over-configuration web framework." },
    ],
  },
  {
    name: "Mobile",
    color: "bg-orange-50 border-orange-200",
    headerColor: "bg-orange-500",
    techs: [
      { name: "Flutter", desc: "Google's UI toolkit for natively compiled mobile apps." },
      { name: "React Native", desc: "Build native apps using React for iOS and Android." },
      { name: "Swift", desc: "Apple's language for building native iOS apps." },
      { name: "Kotlin", desc: "Modern language for Android app development." },
      { name: "Ionic", desc: "Hybrid mobile app development framework." },
      { name: "Xamarin", desc: "Microsoft's platform for cross-platform mobile apps." },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "bg-cyan-50 border-cyan-200",
    headerColor: "bg-cyan-500",
    techs: [
      { name: "AWS", desc: "Amazon's comprehensive cloud services platform." },
      { name: "Microsoft Azure", desc: "Microsoft's enterprise cloud and hybrid solutions." },
      { name: "Google Cloud", desc: "Google's suite of cloud computing services." },
      { name: "Docker", desc: "Containerization platform for consistent deployments." },
      { name: "Kubernetes", desc: "Container orchestration for scalable microservices." },
      { name: "Terraform", desc: "Infrastructure as code for cloud provisioning." },
    ],
  },
  {
    name: "AI & Data",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-500",
    techs: [
      { name: "TensorFlow", desc: "Google's open-source ML framework." },
      { name: "PyTorch", desc: "Meta's dynamic neural network library." },
      { name: "OpenAI GPT", desc: "Powerful language models for NLP applications." },
      { name: "Scikit-learn", desc: "Machine learning tools for Python." },
      { name: "Apache Spark", desc: "Unified analytics engine for big data." },
      { name: "Elasticsearch", desc: "Distributed search and analytics engine." },
    ],
  },
  {
    name: "Databases",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-500",
    techs: [
      { name: "PostgreSQL", desc: "Advanced open-source relational database." },
      { name: "MongoDB", desc: "Flexible document-based NoSQL database." },
      { name: "MySQL", desc: "World's most popular open-source database." },
      { name: "Redis", desc: "In-memory data structure store for caching." },
      { name: "Cassandra", desc: "Distributed NoSQL for massive scale." },
      { name: "DynamoDB", desc: "AWS managed NoSQL for serverless apps." },
    ],
  },
];

const capabilities = [
  "Microservices Architecture",
  "Event-Driven Systems",
  "Real-time Applications",
  "Progressive Web Apps",
  "Serverless Computing",
  "GraphQL APIs",
  "RESTful API Design",
  "CI/CD Pipeline Setup",
  "Zero-Downtime Deployments",
  "Performance Optimization",
  "Code Reviews & Audits",
  "Technical Documentation",
];

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="page-technologies">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 text-white" data-testid="section-tech-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Technologies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            We Master the Tech Stack
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From proven frameworks to bleeding-edge AI tools — our engineers are fluent in 50+
            technologies to build your vision.
          </p>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-white" data-testid="section-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900">Our Technology Stack</h2>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto">
              Carefully selected technologies that deliver performance, scalability, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat) => (
              <div
                key={cat.name}
                className={`border ${cat.color} rounded-2xl overflow-hidden`}
                data-testid={`card-tech-category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`${cat.headerColor} px-5 py-3`}>
                  <h3 className="text-white font-bold">{cat.name}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {cat.techs.map((tech) => (
                    <div key={tech.name} className="flex items-start gap-2" data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
                        <p className="text-xs text-gray-500 leading-snug">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="py-16 bg-gray-50" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
              Engineering Capabilities
            </h2>
            <p className="text-gray-600 mt-2">Beyond individual technologies — we excel at architectural patterns</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
                data-testid={`badge-capability-${cap.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Expertise Stats */}
      <section className="py-16 bg-gray-950 text-white" data-testid="section-tech-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Technologies" },
              { value: "1200+", label: "Expert Engineers" },
              { value: "5400+", label: "Projects Built" },
              { value: "99%", label: "Code Quality Score" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold font-heading text-blue-400 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600" data-testid="section-tech-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">
            Need a Specific Technology Stack?
          </h2>
          <p className="text-blue-100 mb-6">We work with your preferred tools or recommend the best fit for your project.</p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Discuss Your Stack
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
