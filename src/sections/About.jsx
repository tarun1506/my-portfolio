import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/portfolio";
import { MapPin, GraduationCap } from "lucide-react";
import aboutPic from "../assets/tarun_about_me.png";

export default function About() {
  const imgRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const fadeIn = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.5)));      
      const fadeOut = Math.min(1, Math.max(0, rect.bottom / (vh * 0.5)));

      setOpacity(Math.min(fadeIn, fadeOut) * 0.6);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-heading">About Me</h2>
          <div className="w-12 h-1 bg-primary-500 mb-8 rounded-full" />
          <div className="flex flex-col gap-4 mb-6">
            {personalInfo.bio.map((para, i) => (
              <p key={i} className="text-slate-300 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-400" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-primary-400" />
              Master's in Computer Science
            </span>
          </div>
        </div>

        <div ref={imgRef} className="flex justify-start -ml-8 order-1 md:order-2">
          <img
            src={aboutPic}
            alt={personalInfo.name}
            className="w-[120%] h-full object-cover rounded-2xl transition-opacity duration-500"
            style={{
              opacity,
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
