import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/portfolio";
import { MapPin, GraduationCap } from "lucide-react";
import aboutPic from "../assets/tarun_about_me.png";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
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

        <div className="flex justify-center">
          <img
            src={aboutPic}
            alt={personalInfo.name}
            className="w-full h-full object-cover rounded-2xl opacity-40"
            style={{
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
