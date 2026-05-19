import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const NotFound = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center text-2xl font-semibold transition-all duration-700 ${
        isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
      }`}
    >
      NotFound
    </div>
  );
};
