import { Briefcase, Code, User } from "lucide-react";
import aboutImage from "../assets/my.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 animate-slide-in-up" : "opacity-0"
        }`}>
          About <span className="text-primary"> Me</span>
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-[0.6fr_1.4fr] gap-10 items-start mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 animate-slide-in-left" : "opacity-0 -translate-x-10"
        }`}>
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 aspect-square">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-cyan-500/30 rounded-2xl blur-xl" />
              <img
                src={aboutImage}
                alt="Profile"
                className="relative w-full h-full rounded-2xl border border-slate-700/50 shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-3xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed">
              Hey! I'm a Full-Stack Developer and an Open-Source enthusiast based in Lucknow, Uttar Pradesh. I specialize in building end-to-end web applications with a deep focus on performance, accessibility, and beautiful interfaces.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              With a strong focus on full stack development and building scalable web applications, I am experienced in developing real-world projects, including AI-integrated platforms and user-centric applications, with an emphasis on performance and practical problem-solving. I believe great software is where engineering rigor meets creative vision.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-base py-2.5 px-6">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1p5Bl_YkkdAWu8nr0aAu-3djfDouf8WiL/view?usp=share_link"
                className="px-6 py-2.5 rounded-full border border-primary text-primary text-base hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={cardsRef}>
              <div className={`gradient-border p-7 card-hover transition-all duration-700 ${
                cardsVisible ? "opacity-100 animate-slide-in-up" : "opacity-0 translate-y-10"
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`gradient-border p-7 card-hover transition-all duration-700 delay-100 ${
                cardsVisible ? "opacity-100 animate-slide-in-up" : "opacity-0 translate-y-10"
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">AI Integration with Full Stack</h4>
                    <p className="text-sm text-muted-foreground">
                      Integrating AI into full-stack apps for smarter and more efficient user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`gradient-border p-7 card-hover transition-all duration-700 delay-200 ${
                cardsVisible ? "opacity-100 animate-slide-in-up" : "opacity-0 translate-y-10"
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Leading projects from conception to completion with agile
                      methodologies.
                    </p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};
