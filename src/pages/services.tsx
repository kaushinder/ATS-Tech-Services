import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  TrendingUp,
  ShoppingCart,
  Database,
  Lock,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const allServices = [
  {
    icon: Code2,
    title: "Web Development",
    color: "bg-blue-500",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    description:
      "We craft high-performance, scalable web applications tailored to your business goals. Our team specializes in modern frameworks and best practices.",
    features: [
      "Custom Web Application Development",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "API Development & Integration",
      "Website Performance Optimization",
      "CMS Development",
    ],
    technologies: ["React.js", "Next.js", "Angular", "Vue.js", "Node.js", "Python", "Laravel"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "bg-purple-500",
    lightBg: "bg-purple-50",
    textColor: "text-purple-600",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences with high performance on iOS and Android platforms.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform (Flutter, React Native)",
      "App UI/UX Design",
      "App Store Optimization (ASO)",
      "App Maintenance & Support",
      "Enterprise Mobile Solutions",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Ionic", "Xamarin"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    color: "bg-pink-500",
    lightBg: "bg-pink-50",
    textColor: "text-pink-600",
    description:
      "User-centered design philosophy that balances aesthetic appeal with functional excellence to create digital experiences users love.",
    features: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design Systems",
      "Motion Design",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    color: "bg-cyan-500",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-600",
    description:
      "End-to-end cloud consulting, migration, and managed services that scale with your business and reduce infrastructure costs.",
    features: [
      "Cloud Architecture Design",
      "Cloud Migration Services",
      "DevOps & CI/CD Pipelines",
      "Kubernetes & Containerization",
      "Cloud Cost Optimization",
      "24/7 Monitoring & Support",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Brain,
    title: "AI & ML Development",
    color: "bg-orange-500",
    lightBg: "bg-orange-50",
    textColor: "text-orange-600",
    description:
      "Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Chatbot Development",
      "AI Integration Services",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "BERT", "GPT"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    color: "bg-green-500",
    lightBg: "bg-green-50",
    textColor: "text-green-600",
    description:
      "Data-driven marketing strategies that increase visibility, drive qualified traffic, and convert visitors into loyal customers.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing",
      "Conversion Rate Optimization",
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Hootsuite", "Ahrefs"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    color: "bg-red-500",
    lightBg: "bg-red-50",
    textColor: "text-red-600",
    description:
      "Complete e-commerce solutions from simple storefronts to complex multi-vendor marketplaces with seamless payment integration.",
    features: [
      "Custom E-commerce Platforms",
      "Shopify & WooCommerce",
      "Payment Gateway Integration",
      "Inventory Management",
      "Multi-vendor Marketplace",
      "Mobile Commerce",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe", "PayPal"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    color: "bg-indigo-500",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-600",
    description:
      "Robust database design, optimization, and management services ensuring data integrity, performance, and scalability.",
    features: [
      "Database Architecture Design",
      "Data Migration",
      "Performance Optimization",
      "Data Warehouse Solutions",
      "Real-time Data Processing",
      "Backup & Recovery",
    ],
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Cassandra", "Elasticsearch"],
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    color: "bg-gray-600",
    lightBg: "bg-gray-50",
    textColor: "text-gray-600",
    description:
      "Comprehensive security solutions to protect your digital assets, ensure compliance, and safeguard against evolving threats.",
    features: [
      "Security Audits & Penetration Testing",
      "GDPR & HIPAA Compliance",
      "Secure Code Review",
      "DDoS Protection",
      "Identity & Access Management",
      "Incident Response",
    ],
    technologies: ["OWASP", "Burp Suite", "Metasploit", "Snort", "Vault", "Cloudflare"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements." },
  { step: "02", title: "Planning", desc: "Creating a detailed project roadmap, wireframes, and technical architecture." },
  { step: "03", title: "Design", desc: "Crafting pixel-perfect designs that align with your brand and delight users." },
  { step: "04", title: "Development", desc: "Building your solution with clean, scalable, and maintainable code." },
  { step: "05", title: "Testing", desc: "Rigorous QA testing to ensure performance, security, and reliability." },
  { step: "06", title: "Launch", desc: "Seamless deployment and post-launch monitoring for a smooth go-live." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="page-services">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 text-white" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Full-Spectrum Digital Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From ideation to deployment — we deliver end-to-end technology solutions that power
            business transformation and accelerate growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all group"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 group-hover:${service.textColor} transition-colors text-gray-900`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.slice(0, 4).map((t) => (
                      <span key={t} className={`${service.lightBg} ${service.textColor} text-xs px-2.5 py-1 rounded-full font-medium`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact">
                    <button className={`flex items-center gap-1 ${service.textColor} text-sm font-medium group-hover:gap-2 transition-all`}>
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              How We Deliver Excellence
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              A proven 6-step process that ensures quality, transparency, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all relative"
                data-testid={`card-process-${i}`}
              >
                <span className="text-5xl font-bold text-blue-50 absolute top-4 right-4">{step.step}</span>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600" data-testid="section-services-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-6">Get a free consultation and custom project estimate within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
