// components/SkillsSection.js

// 1. Impor komponen 'Image' dari Next.js
import Image from 'next/image';

const SkillsSection = () => {
  // 2. Ubah struktur data hardSkills menjadi array of objects
  // Setiap objek berisi nama skill dan path ke ikonnya di folder /public
  const hardSkills = [
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'Microsoft Excel', icon: '/icons/excel.png' },
    { name: 'Power BI', icon: '/icons/powerbi.png' },
    { name: 'R Language', icon: '/icons/r.png' },
    { name: 'Data Visualization', icon: '/icons/dataviz.png' }, // Contoh nama file
    { name: 'Project Management', icon: '/icons/notion.png' },   // Contoh nama file
  ];

  const softSkills = [
    "Problem Solving", "Teamwork", "Communication", "Leadership",
    "Adaptability", "Time Management", "Analytical Thinking"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Skills
        </h2>

        {/* Hard Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-200">
            Hard Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* 3. Ubah cara me-render skill dengan komponen Image */}
            {hardSkills.map((skill) => (
              <span key={skill.name} className="bg-gray-700 text-gray-200 text-lg font-medium px-4 py-2 rounded-full flex items-center">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={24} // Atur ukuran ikon
                  height={24}
                  className="mr-2" // Beri jarak antara ikon dan teks
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills Section (tidak berubah) */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-200">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span key={skill} className="bg-gray-700 text-gray-200 text-lg font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;