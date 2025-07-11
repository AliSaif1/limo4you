const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social - spans 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex-shrink-0 -ml-9">
              <a href="/" className="inline-block">
                <img
                  src="/logo.png"
                  alt="Limo 4 All Logo"
                  className="w-[150px] h-[60px] object-contain"
                />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium limousine services for all your transportation needs.
            </p>

            <div className="flex space-x-5">
              <a href="https://www.facebook.com/profile.php?id=61577658606186" className="text-gray-400 hover:text-secondary transition duration-300 transform hover:-translate-y-1">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/limo4all.ca?fbclid=IwY2xjawLIwM5leHRuA2FlbQIxMABicmlkETFuRG9wQVQzSDB5MlVMOWRKAR4Z87o2whq2XXxOpmyB3ukAwtZ1g0AP-ec5-Q-iZl0Bi3dBM3s1AvEgkc1xcw_aem_cy3J9nH1LrE4H1N6ao5scQ" className="text-gray-400 hover:text-secondary transition duration-300 transform hover:-translate-y-1">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - spans 2 columns */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-secondary inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:translate-x-1 transition-transform">Home</span>
              </a></li>
              <li><a href="/services" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:translate-x-1 transition-transform">Services</span>
              </a></li>
              <li><a href="/fleet" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:translate-x-1 transition-transform">Fleet</span>
              </a></li>
              <li><a href="/about" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:translate-x-1 transition-transform">About Us</span>
              </a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                <span className="group-hover:translate-x-1 transition-transform">Contact</span>
              </a></li>
            </ul>
          </div>

          {/* Services - spans 4 columns with two columns inside */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-secondary inline-block">Services</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                <li>
                  <a href="/services/airport-transportation" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Airport Transfers</span>
                  </a>
                </li>
                <li>
                  <a href="/services/weddings" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Weddings</span>
                  </a>
                </li>
                <li>
                  <a href="/services/corporate-events" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Corporate Events</span>
                  </a>
                </li>
                <li>
                  <a href="/services/special-events" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Special Events</span>
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <a href="/services/bachelor-parties" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Bachelor Parties</span>
                  </a>
                </li>
                <li>
                  <a href="/services/sporting-events" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Sporting Events</span>
                  </a>
                </li>
                <li>
                  <a href="/services/graduations-proms" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Grad & Proms</span>
                  </a>
                </li>
                <li>
                  <a href="/services/casino-trips" className="text-gray-300 hover:text-secondary transition duration-200 flex items-start group">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Casino Trips</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us - spans 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-secondary inline-block">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start group">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-secondary flex-shrink-0 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed group-hover:text-secondary transition-colors">49 THORNCLIFFE PARK DRIVE<br/>UNIT # 118 EAST YORK<br />ONTARIO M4H 1J6</span>
              </li>
              <li className="flex items-center group">
                <svg className="w-5 h-5 mr-3 text-secondary flex-shrink-0 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-secondary transition-colors">+1 (647) 313-1786</span>
              </li>
              <li className="flex items-center group">
                <svg className="w-5 h-5 mr-3 text-secondary flex-shrink-0 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-secondary transition-colors">contact@limo4all.ca</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LIMO 4 ALL. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;