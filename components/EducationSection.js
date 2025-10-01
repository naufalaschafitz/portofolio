// components/EducationSection.js

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const educationData = [
  {
    year: '2021 - 2025',
    degree: 'Sarjana Komputer',
    department: 'Sistem Informasi',
    institution: 'Institut Teknologi Sepuluh Nopember',
    icon: '/icons/its.png',
    gpa: '3.73 / 4.00',
    // --- DESCRIPTION DIUBAH MENJADI ARRAY DI SINI ---
    description: [
      'Graduated with Cum Laude honors.',
      'Developed a research focus in data engineering and business intelligence.',
      'Actively involved in organizational management, serving as Head of the IT Division.',
      'Completed specialized trainings in leadership, entrepreneurship, and internationalization.',
    ],
  },
  {
    year: '2019 - 2021',
    degree: 'Science',
    department: null,
    institution: 'SMA Islam Al-Azhar 4',
    icon: '/icons/alazhar.png',
    // Deskripsi SMA tetap string karena lebih pendek
    description: 'Maintained a strong academic track record and graduated with honors. Participated in national-level competitions, including a scientific writing competition and physics olympiads.',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-100">
          Educational Background
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-600 hidden sm:block"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className="hidden sm:block w-5/12"></div>
              <div className="z-10 flex items-center bg-sky-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="bg-gray-800 rounded-lg shadow-lg w-full sm:w-5/12 p-6">
                <p className="text-sky-400 font-semibold text-sm mb-2">{edu.year}</p>
                <div className="flex items-center gap-3 mb-3">
                  <Image src={edu.icon} alt={`${edu.institution} logo`} width={45} height={45} className="rounded-full object-contain" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">{edu.institution}</h3>
                    <p className="text-md font-medium text-gray-300">
                      {edu.degree}
                      {edu.department && ` - ${edu.department}`}
                    </p>
                  </div>
                </div>
                {edu.gpa && (
                  <p className="text-sm font-semibold text-gray-100 mb-3 flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span>GPA: {edu.gpa}</span>
                  </p>
                )}

                {/* --- LOGIKA RENDERING DESKRIPSI DIPERBARUI --- */}
                {Array.isArray(edu.description) ? (
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {edu.description.map((desc, i) => (
                      <li key={i} className="flex gap-x-3">
                        <span className="flex-shrink-0">•</span>
                        <span className="text-justify">{desc}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm text-justify">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;