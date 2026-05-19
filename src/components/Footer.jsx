import { ArrowUp } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <footer
      ref={ref}
      className={`py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center transition-all duration-700 ${
        isVisible ? "opacity-100 animate-slide-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Aditya Verma. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
