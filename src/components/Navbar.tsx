import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services" },
  { name: "Mobile App Development", href: "/services" },
  { name: "UI/UX Design", href: "/services" },
  { name: "Digital Marketing", href: "/services" },
  { name: "Cloud Solutions", href: "/services" },
  { name: "AI & ML Development", href: "/services" },
];

const technologies = [
  { name: "React.js", href: "/technologies" },
  { name: "Node.js", href: "/technologies" },
  { name: "Python", href: "/technologies" },
  { name: "Flutter", href: "/technologies" },
  { name: "React Native", href: "/technologies" },
  { name: "Angular", href: "/technologies" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setTechOpen(false);
  }, [location]);

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ATS</span>
              </div>
              <span
                className={`font-bold text-xl font-heading transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Tech Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" data-testid="link-home">
              <span
                className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors animated-underline ${
                  isScrolled
                    ? isActive("/")
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    : isActive("/")
                    ? "text-blue-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
                data-testid="button-services-dropdown"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {services.map((s) => (
                    <Link key={s.name} href={s.href}>
                      <span className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTechOpen(true)}
              onMouseLeave={() => setTechOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
                data-testid="button-tech-dropdown"
              >
                Technologies <ChevronDown className={`w-4 h-4 transition-transform ${techOpen ? "rotate-180" : ""}`} />
              </button>
              {techOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {technologies.map((t) => (
                    <Link key={t.name} href={t.href}>
                      <span className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                        {t.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/portfolio" data-testid="link-portfolio">
              <span
                className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                  isScrolled
                    ? isActive("/portfolio")
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    : isActive("/portfolio")
                    ? "text-blue-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Portfolio
              </span>
            </Link>

            <Link href="/about" data-testid="link-about">
              <span
                className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                  isScrolled
                    ? isActive("/about")
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    : isActive("/about")
                    ? "text-blue-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                About
              </span>
            </Link>

            <Link href="/careers" data-testid="link-careers">
              <span
                className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Careers
              </span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917830060800"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
              }`}
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              +91 7830060800
            </a>
            <Link href="/contact">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                data-testid="button-get-quote"
              >
                Get Free Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/technologies", label: "Technologies" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="block px-3 py-2.5 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer font-medium transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link href="/contact">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
