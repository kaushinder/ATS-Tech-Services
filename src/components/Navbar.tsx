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

const isActive = (path: string): boolean => {
  return location === path;
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ✅ UPDATED LOGO SECTION */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              
              {/* Logo Image */}
              <img
                src="http://www.atmasamman.com/wp-content/uploads/2021/02/logo.jpg"
                alt="Atmasamman Logo"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Text (2 lines) */}
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-bold text-lg ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Atmasamman
                </span>
                <span
                  className={`text-sm ${
                    isScrolled ? "text-blue-600" : "text-blue-300"
                  }`}
                >
                  Tech Services
                </span>
              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">

            <Link href="/">
              <span className={`px-3 py-2 text-sm font-medium cursor-pointer ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
                Home
              </span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 px-3 py-2 text-sm ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl py-2">
                  {services.map((s) => (
                    <Link key={s.name} href={s.href}>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about">
              <span className={`px-3 py-2 text-sm ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
                About
              </span>
            </Link>

            <Link href="/contact">
              <span className={`px-3 py-2 text-sm ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
                Contact
              </span>
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+917830060800" className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              +91 7830060800
            </a>

            <Link href="/contact">
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}