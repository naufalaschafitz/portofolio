import Reveal from "@/components/Reveal";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectSection";
import EducationSection from "@/components/EducationSection";
import InternshipSection from "@/components/Internship";
import CertificationsSection from "@/components/CertificationsSection";
import VolunteerSection from "@/components/VolunteerSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Reveal><AboutSection /></Reveal>
      <Reveal><SkillsSection /></Reveal>
      <Reveal><ProjectsSection /></Reveal>
      <Reveal><EducationSection /></Reveal>
      <Reveal><InternshipSection /></Reveal>
      <Reveal><CertificationsSection /></Reveal>
      <Reveal><VolunteerSection /></Reveal>
      <Reveal><GallerySection /></Reveal>
      {/* Nanti komponen lain seperti About, Projects, dll akan ditambahkan di bawah sini */}
    </main>
  );
}