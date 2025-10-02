"use client";

import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Data Analysis Dashboard',
    category: ['Data Analytics',],
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
    {
    id: 2,
    title: 'End-to-End UAV Route Optimization for Precision Agriculture',
    category: ['Route Optimization','Soft Computing','Data Clustering & Spatial Analysis'],
    image: '/projects/Proyek2_1.png',
    tools: ['Python', 'Google Colab', 'Desmos', 'Metaheuristic ALgorithms (SA, ACO)', 'Google OR-Tools', 'LLoyd Algorithm'],
    description:
      'This capstone project showcases the development of an intelligent routing system for agricultural drones (UAVs). I implemented a Hybrid Simulated Annealing (SA) algorithm to find efficient distribution paths, a process that began with raw spatial data processing and clustering using K-Means with grid search. To ensure robustness, the algorithm\'s performance was rigorously benchmarked against industry-standard solutions like Google OR-Tools and another metaheuristic, the Hybrid Ant Colony Optimization (MMAS). The initial data clustering phase successfully achieved 97.28% area coverage, and the final Hybrid SA model produced a shortest route of 1425.22 meters, performing within just 0.02% of the Google OR-Tools benchmark. This demonstrates a comprehensive, end-to-end approach to delivering a validated, high-performance optimization solution.',
    galleryImages: [
      '/projects/Proyek2_2.png', 
      '/projects/Proyek2_3.png',
      '/projects/Proyek2_4.png',
      '/projects/Proyek2_5.png',
      '/projects/Proyek2_6.png',
      '/projects/Proyek2_7.png',
      '/projects/Proyek2_8.png',
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