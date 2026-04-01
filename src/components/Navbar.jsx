import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Smile, ChevronDown, Users, Microscope, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar({ onOpenCalendly }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "services" },
    { name: "Radiology", path: "radiology" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <Smile size={32} strokeWidth={1.5} />
          <span className={styles.logoText}>Carlos Velez</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
              onClick={() => handleScroll(link.path)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* About Dropdown */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <button className={styles.dropdownBtn}>
              About{" "}
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${isAboutDropdownOpen ? styles.chevronOpen : ""}`}
              />
            </button>

            {/* Dropdown Pill (Desktop) */}
            <div
              className={`${styles.dropdownMenu} ${isAboutDropdownOpen ? styles.dropdownMenuOpen : ""}`}
            >
              <div className={styles.dropdownPill}>
                <Link to="/about/who-we-are" className={styles.dropdownItem}>
                  <Users size={18} className={styles.dropdownIcon} />
                  Who We Are
                </Link>
                <Link to="/about/technology" className={styles.dropdownItem}>
                  <Microscope size={18} className={styles.dropdownIcon} />
                  Technology
                </Link>
              </div>
            </div>
          </div>

          <NavLink
            to="/smile-travel"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            Smile & Travel
          </NavLink>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className={styles.ctaWrapper}>
          <button onClick={onOpenCalendly} className={styles.ctaBtn}>
            Book Free Assessment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ""}`}
      >
        <nav className={styles.mobileNavContent}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile About Section */}
          <div className={styles.mobileAboutSection}>
            <div className={styles.mobileAboutTitle}>About</div>
            <div className={styles.mobileAboutLinks}>
              <Link
                to="/about/who-we-are"
                className={styles.mobileAboutLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users size={18} /> Who We Are
              </Link>
              <Link
                to="/about/technology"
                className={styles.mobileAboutLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Microscope size={18} /> Technology
              </Link>
            </div>
          </div>

          <Link
            to="/smile-travel"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Smile & Travel
          </Link>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenCalendly();
            }}
            className={styles.mobileCtaBtn}
          >
            Book Free Assessment
          </button>
        </nav>
      </div>
    </header>
  );
}
