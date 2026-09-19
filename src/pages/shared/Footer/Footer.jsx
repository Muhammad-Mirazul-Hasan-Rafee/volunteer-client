import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🤝</span>
              <span className="text-xl font-bold text-white">
                Volunteer<span className="text-yellow-400">Corner</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Connecting passionate volunteers with meaningful opportunities.
              Find your next challenge and make a difference today.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L5.9 22H2.7l7.5-8.6L2.4 2h6.6l4.5 6.6L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21h-4V9z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 .5A11.5 11.5 0 00.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allpost"
                  className="hover:text-yellow-400 transition"
                >
                  All Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/addpost"
                  className="hover:text-yellow-400 transition"
                >
                  Post a Need
                </Link>
              </li>
              <li>
                <Link
                  to="/myApplications"
                  className="hover:text-yellow-400 transition"
                >
                  My Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/neednow"
                  className="hover:text-yellow-400 transition"
                >
                  Urgent Needs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-yellow-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-yellow-400 transition">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-yellow-400 transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-yellow-400 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-yellow-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Address */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📍</span>
                <span>
                  123 Volunteer Avenue,
                  <br />
                  Dhaka 1207, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📞</span>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-yellow-400 transition"
                >
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">✉️</span>
                <a
                  href="mailto:support@volunteercorner.com"
                  className="hover:text-yellow-400 transition break-all"
                >
                  support@volunteercorner.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">🕐</span>
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter (optional but nice) */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg">
                Stay in the loop
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest volunteer opportunities delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-64"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {currentYear}{" "}
            <span className="text-white font-semibold">VolunteerCorner</span>.
            All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-yellow-400 transition">
              Privacy
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/terms" className="hover:text-yellow-400 transition">
              Terms
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/cookies" className="hover:text-yellow-400 transition">
              Cookies
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/sitemap" className="hover:text-yellow-400 transition">
              Sitemap
            </Link>
          </div>
          <p className="text-gray-500">
            Made with <span className="text-white">Rafee</span> <span>❤️</span> for changemakers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;