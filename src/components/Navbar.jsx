import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle.jsx";
import profileIllustration from "../assets/profile-illustration.svg";

function Navbar({ sections, activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.setProperty("overflow", "hidden");
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const handleNavigate = (id, event) => {
    event?.preventDefault();
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${menuOpen ? " navbar--open" : ""}`}>
      <div className="navbar__inner container">
        <a
          href="#hero"
          className="navbar__brand"
          onClick={(event) => handleNavigate("hero", event)}
        >
          <span className="navbar__brand-mark">
            <img
              src={profileIllustration}
              alt="Illustrated portrait of Me :)"
            />
          </span>
          <span className="navbar__brand-text">FM Aman</span>
        </a>
        <nav className="navbar__links">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar__link${
                activeSection === id ? " is-active" : ""
              }`}
              onClick={(event) => handleNavigate(id, event)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar__menu-button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            key="mobile-nav"
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`navbar__mobile-link${
                  activeSection === id ? " is-active" : ""
                }`}
                onClick={(event) => handleNavigate(id, event)}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
