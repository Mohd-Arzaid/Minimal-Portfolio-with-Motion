import Container from "./Container";
import ProfileImage from "../../assets/heroportfolio.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  return (
    <Container>
      <nav className="flex items-center justify-between p-2 ">
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
      </nav>
    </Container>
  );
};

export default Navbar;
