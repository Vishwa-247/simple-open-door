
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-brand-blue">Company</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md font-medium transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md font-medium transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-brand-blue hover:bg-brand-blue/90">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full mt-2 bg-brand-blue hover:bg-brand-blue/90">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
