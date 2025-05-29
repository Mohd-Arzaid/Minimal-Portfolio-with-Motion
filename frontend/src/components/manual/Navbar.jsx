import Container from "./Container";
import ProfileImage from "../../assets/heroportfolio.jpg";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("scrollY",latest);
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-input)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="flex fixed top-0 inset-x-0 z-50 max-w-4xl mx-auto items-center justify-between rounded-full px-3 py-2 bg-white dark:bg-neutral-900 "
      >
        <img
          className="h-10 w-10 rounded-full"
          src={ProfileImage}
          alt="Avatar"
          width="100"
          height="100"
        />

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="font-inter text-sm px-2 py-1 relative "
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
