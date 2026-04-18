import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile App Development", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Digital Marketing", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "AI & ML Development", href: "/services" },
    { name: "E-commerce Development", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  technologies: [
    { name: "React.js", href: "/technologies" },
    { name: "Node.js", href: "/technologies" },
    { name: "Python", href: "/technologies" },
    { name: "Flutter", href: "/technologies" },
    { name: "React Native", href: "/technologies" },
    { name: "AWS & Azure", href: "/technologies" },
  ],
};

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400" data-testid="footer">
      {/* Top CTA Band */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mt-1">
                Get a free consultation and quote within 24 hours.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact">
                <button
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  data-testid="button-footer-cta"
                >
                  Get Free Quote
                </button>
              </Link>
              <a
                href="tel:+18001234567"
                className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ATS</span>
                </div>
                <span className="text-white font-bold text-xl font-heading">Tech Services</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              We are a leading software development company with 19+ years of experience, delivering
              innovative digital solutions to clients across 38+ countries worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="mailto:hr@atmasamman.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-500" />
                hr@atmasamman.com
              </a>
              <a href="tel:+917830060800" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-500" />
                +91 7830060800
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <span>Plot No. 56, Sector 88, Noida, Uttar Pradesh 201305, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="flex items-center gap-1 text-sm hover:text-white hover:gap-2 transition-all cursor-pointer group">
                      <ArrowRight className="w-3 h-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="flex items-center gap-1 text-sm hover:text-white hover:gap-2 transition-all cursor-pointer group">
                      <ArrowRight className="w-3 h-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Technologies</h4>
            <ul className="space-y-2.5">
              {footerLinks.technologies.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="flex items-center gap-1 text-sm hover:text-white hover:gap-2 transition-all cursor-pointer group">
                      <ArrowRight className="w-3 h-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ATS-Tech Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
