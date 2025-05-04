
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <p className="text-gray-300 max-w-xs">
              We're dedicated to providing innovative solutions that help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {[
                "facebook",
                "twitter",
                "instagram",
                "linkedin"
              ].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "Features", href: "#features" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Documentation", href: "#" },
                { name: "Help Center", href: "#" },
                { name: "Blog", href: "#" },
                { name: "FAQ", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "GDPR", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2025 Company. All rights reserved.</p>
          <p className="text-gray-300 mt-4 md:mt-0">
            Built with <span className="text-red-400">♥</span> for better business
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
