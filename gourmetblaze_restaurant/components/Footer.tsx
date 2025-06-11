
import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon'; // Added LinkedInIcon

const GourmetBlazeLogoSmall: React.FC = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-500">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-400 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About & Logo */}
          <div>
            <div className="flex items-center mb-4">
              <GourmetBlazeLogoSmall />
              <span className="ml-2 text-xl font-bold text-slate-100 font-montserrat">Gourmet<span className="text-orange-500">Blaze</span></span>
            </div>
            <p className="text-sm mb-4">
              Igniting your taste buds with culinary masterpieces. Experience the art of flavor in every dish.
            </p>
          </div>

          {/* Column 2: Quick Links (can mirror navbar or have different links) */}
          <div>
            <h5 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Our Story (Example)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ (Example)</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h5 className="text-lg font-semibold text-slate-200 mb-4">Contact Us</h5>
            <address className="not-italic space-y-2 text-sm">
              <p>123 Culinary Avenue, Flavor Town, FT 54321</p>
              <p>Email: <a href="mailto:info@gourmetblaze.com" className="hover:text-orange-400 transition-colors">info@gourmetblaze.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-orange-400 transition-colors">(123) 456-7890</a></p>
            </address>
            <div className="mt-6 flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-orange-500 transition-colors"><FacebookIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-orange-500 transition-colors"><TwitterIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-orange-500 transition-colors"><InstagramIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-orange-500 transition-colors"><LinkedInIcon /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} GourmetBlaze. All Rights Reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;