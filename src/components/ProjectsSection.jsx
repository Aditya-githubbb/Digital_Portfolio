import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "CodeVista : AI-Powered Code Editor",
    description: "An AI-powered code editor with real-time code suggestions, error detection, and intelligent refactoring tools.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Monaco Editor", "Ollama", "WebContainers", "MongoDB"],
    demoUrl: "https://github.com/Aditya-githubbb/CodeVista",
    githubUrl: "https://github.com/Aditya-githubbb/CodeVista",
  },
  {
    id: 2,
    title: "ProFile: Gen AI Powered Resume Analyzer",
    description:
      "a full stack AI-driven platform for interview prep and resume analysis, offering personalized feedback and mock interview simulations.",
    image: "/projects/project2.png",
    tags: ["Node.js", "React", "Express.js", "MongoDB"],
    demoUrl: "https://github.com/Aditya-githubbb/ProFile-Analyzer",
    githubUrl: "https://github.com/Aditya-githubbb/ProFile-Analyzer",
  },
  {
    id: 3,
    title: "MediaMorph: AI-Powered SaaS Application",
    description:
      "An AI-driven SaaS platform for video compression and image resizing, delivering high-quality results with optimized performance.",
    image: "/projects/project3.png",
    tags: ["Next.js", "Prisma", "Cloudinary", "Tailwind", "NeonDB"],
    demoUrl: "https://github.com/Aditya-githubbb/SaaS_MediaMorph",
    githubUrl: "https://github.com/Aditya-githubbb/SaaS_MediaMorph",
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 animate-slide-in-up" : "opacity-0"
        }`}>
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
          isVisible ? "opacity-100 animate-slide-in-up" : "opacity-0 translate-y-10"
        }`}>
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Aditya-githubbb"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
