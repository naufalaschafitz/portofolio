"use client";

import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Data Analysis Dashboard',
    category: 'Data Analytics',
    image: '/projects/Proyek1_1.png',
    tools: ['Power BI', 'Excel'],
    description:
      'This project involved creating a comprehensive sales dashboard using Power BI. The goal was to visualize key performance indicators (KPIs), track sales trends over time, and identify top-performing products and regions. The dashboard is interactive, allowing users to filter data by date, category, and location for deeper insights.',
    galleryImages: [
      '/projects/Proyek1_1.png',
      '/projects/Proyek1_2.png', 
      '/projects/Proyek1_3.png',
      '/projects/Proyek1_4.png',
      '/projects/Proyek1_5.png',
    ],
  },
  // ... (proyek Anda yang lain)
];

const ProjectsSection = () => {
  // 2. Buat state untuk melacak ID proyek yang sedang dibuka
  // Awalnya null, artinya tidak ada yang dibuka
  const [expandedId, setExpandedId] = useState(null);

  // 3. Buat fungsi untuk menangani klik pada kartu
  const handleToggle = (projectId) => {
    // Jika ID yang diklik sama dengan yang sudah terbuka, tutup kartu (set ke null)
    // Jika tidak, buka kartu dengan ID tersebut
    setExpandedId(expandedId === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Projects
        </h2>
        
        <div className="space-y-8">
          {projectsData.map((project) => (
            // 4. Kirim state dan fungsi sebagai props ke ProjectCard
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id} // Kirim true jika kartu ini sedang dibuka
              onToggle={handleToggle} // Kirim fungsi untuk menangani klik
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;