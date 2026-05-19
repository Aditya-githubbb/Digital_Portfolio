import {
  Award,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const achievements = [
  {
    id: 1,
    title: "DSA Mastery",
    description: "Solved 250+ problems on LeetCode with a consistent 100+ day streak.",
    metric: "Top 25%",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Hackathon Enthusiast",
    description: "🥈 Simplify AI Tools'25 Runner Up · SIH'25 Participant · IDEA Hackathon'25 Participant",
    metric: "4+ Events",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Active Open Source Contributor in GirlScript Summer of Code 2025 · SuperContributor in Hacktoberfest'25",
    metric: "50+ PRs",
    icon: Award,
  },
  {
    id: 4,
    title: "Open to Work",
    description: "Actively seeking Full-Stack / Frontend roles. Open to remote, hybrid, and relocation.",
    metric: "Available Now",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Certifications",
    description: "National Science Day’24 Quiz Winner · NPTEL Certification · Udemy Certified Full Stack Developer · Amiphoria'23 and '25 Certificates",
    metric: "10+ Certifications",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Apart from Technical Life",
    description: "I'm a good singer and content creator who likes to create content that contains memories for life and record my own-sung songs.",
    metric: "1k+ Followers on Social Media",
    icon: CalendarCheck,
  },
];

export const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-24 px-4 relative bg-secondary/10"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 animate-slide-in-up" : "opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-3">
            Achievements & Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Recognized milestones and top achievements
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A snapshot of awards, community impact, and performance wins across my
            development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 animate-slide-in-up"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-sm">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
