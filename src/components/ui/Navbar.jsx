import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { navLinks } from "../../data/data";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Set initial dark mode
  useEffect(() => {
    // Check if dark mode is already set
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    }
    setIsDark(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center justify-between">
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex items-center gap-2">
        {navLinks.map((item) => {
          return (
            <Link
              key={item}
              to={item.toLowerCase().replace(/\s+/g, "")}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-secondary px-4 py-2 rounded-full text-cloud font-medium hover:bg-secondary/10">
              {item}
            </Link>
          );
        })}
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-full bg-cloud shadow-lg hover:shadow-xl transition-all duration-300 sm:mr-0 mr-4">
        {isDark ? (
          <FaSun className="text-xl text-secondary" />
        ) : (
          <FaMoon className="text-xl text-secondary" />
        )}
      </button>

      {/* MOBILE NAVBAR */}
      {isMenuOpen && (
        <div className="md:hidden w-4/5 max-w-xs h-auto bg-cloud/80 backdrop-blur-xl fixed top-16 right-6 rounded-2xl p-6 flex flex-col items-start gap-8 pt-16 px-6 shadow-2xl border border-cloud/30 transition-all duration-300 ease-in-out z-40">
          {navLinks.map((item) => {
            return (
              <Link
                key={item}
                to={item.toLowerCase().replace(/\s+/g, "")}
                smooth={true}
                duration={500}
                className="cursor-pointer text-primary hover:text-secondary text-lg font-semibold hover:bg-secondary/10 px-2 py-2 rounded-lg w-full text-left"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {item}
              </Link>
            );
          })}
        </div>
      )}

      {/* HAMBURGER BUTTON */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl font-extrabold text-cloud z-50 relative bg-cloud/10 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-secondary/30">
          {isMenuOpen ? <IoCloseOutline /> : <IoMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
