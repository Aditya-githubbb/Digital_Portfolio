import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const rotatingPhrases = [
    "I'm a GenAI Full Stack Developer",
    "AI/ML Enthusiast",
    "Open Source Contributor",
    "DSA Ninja",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const styleVariants = [
    "text-primary",
    "text-gradient",
    "text-primary/80",
    "text-muted-foreground",
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid gap-24 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-600/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 shadow-lg shadow-slate-950/40 opacity-0 animate-fade-in">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
              <span className="font-medium">Available for Work</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Aditya
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Verma
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight opacity-0 animate-fade-in-delay-3">
              <span
                key={phraseIndex}
                className={`inline-block ${styleVariants[phraseIndex]} opacity-0 animate-fade-in transition duration-700 ease-out`}
              >
                {rotatingPhrases[phraseIndex]}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-4">
              I build intelligent web applications powered by modern technologies and AI. Focused on full-stack development, I craft scalable, high-performance solutions with seamless user experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-in-delay-5">
              <a
                href="https://leetcode.com/u/aditya21_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                <Code2 className="h-4 w-4" />
                LeetCode
              </a>
              <a
                href="https://github.com/Aditya-githubbb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-violet-400/60 hover:text-violet-200"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-verma-034619296/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-blue-400/60 hover:text-blue-200"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="pt-4 opacity-0 animate-fade-in-delay-6">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/90 p-6 shadow-[0_40px_120px_rgba(14,20,40,0.45)] backdrop-blur-2xl opacity-0 animate-fade-in-delay-4">
            <div className="mb-5 flex items-center justify-between rounded-2xl bg-slate-900/90 px-4 py-3 text-sm text-slate-300 shadow-inner shadow-black/20">
              <span className="text-slate-100 font-medium">portfolio.js</span>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                <span className="h-2 w-2 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
              </div>
            </div>
            <pre className="overflow-x-auto text-sm text-slate-100">
              <code className="language-js block leading-7 whitespace-pre">
                <span>
                  <span className="text-cyan-300">const</span> <span className="text-slate-100">developer</span> = {"{"}
                  <br />
                  <span className="text-slate-300">    name:</span> <span className="text-emerald-300">"Aditya Verma"</span>,
                  <br />
                  <span className="text-slate-300">    role:</span> <span className="text-violet-300">"GenAI Full-Stack Dev"</span>,
                  <br />
                  <span className="text-slate-300">    skills:</span> <span className="text-sky-300">["React", "Node", "Mongo", "Express"]</span>,
                  <br />
                  <span className="text-slate-300">    available:</span> <span className="text-amber-300">true</span>,
                  <br />
                  <span className="text-slate-300">    coffee:</span> <span className="text-fuchsia-300">"Always ☕"</span>
                  <br />
                  {"}"};
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
