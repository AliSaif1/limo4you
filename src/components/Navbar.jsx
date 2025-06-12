import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    // { name: "About", path: "/about" },
    // { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-sm py-2 shadow-xl' : 'bg-primary py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <a href="/" className="flex items-center">
              <span className="text-secondary font-display font-bold text-2xl md:text-3xl">LIMO</span>
              <span className="text-secondary font-display font-bold text-2xl md:text-3xl">4</span>
              <span className="font-display font-bold text-2xl md:text-3xl text-white">YOU</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="hover:text-secondary transition-colors duration-200 font-medium text-white px-2 py-1 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+1234567890"
              className="flex items-center bg-secondary hover:bg-secondary/90 text-primary font-semibold px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <Phone className="mr-2" size={18} />
              <span>+1 (234) 567-890</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}>
          <div className="pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-4 py-2 text-white hover:text-secondary hover:bg-white/10 rounded transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center bg-secondary text-primary font-medium px-4 py-2 rounded-full mt-3 w-full"
            >
              <Phone className="mr-2" size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;