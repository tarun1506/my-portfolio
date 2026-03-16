import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/portfolio";
import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-heading">About Me</h2>
          <div className="w-12 h-1 bg-primary-500 mb-8 rounded-full" />
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
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

        {/* Avatar placeholder */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary-600/30 to-primary-900/30 border border-primary-500/20 flex items-center justify-center text-8xl select-none">
            👨‍💻
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
