import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      href: "#",
      description:
        "A sleek and modern Macbook mockup design ideal for showcasing responsive websites.",
    },
    {
      title: "Instant Feedback",
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      href: "#",
      description:
        "A real-time feedback tool allowing users to get and give instant responses during sessions.",
    },
    {
      title: "Apple Clone",
      src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      href: "#",
      description:
        "A pixel-perfect clone of Apple’s website built using modern UI/UX practices.",
    },
    {
      title: "Fight Simulator",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      href: "#",
      description:
        "An interactive fight simulator game featuring realistic physics.",
    },
  ];

  return (
    <div className="py-10">
      <p className="max-w-lg font-inter text-secondary text-sm pt-4 ">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            key={project.title}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <img
                src={project.src}
                alt={project.src}
                height={300}
                width={300}
                className="w-full group-hover:scale-[1.02] rounded-xl object-cover transition duration-200"
              />
            </Link>
            <h2 className="text-neutral-500 mt-2 dark:text-neutral-400 font-inter font-medium tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm mt-2 font-inter max-w-xs text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
