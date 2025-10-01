import Image from 'next/image';

// Data pengalaman magang Anda. Deskripsi dibuat dalam bentuk array untuk bullet points.
const internshipData = [
  {
    role: 'Human Resource Intern',
    company: 'Otoritas Jasa Keuangan',
    duration: 'Feb 2025',
    icon: '/icons/OJK.png', // Ganti dengan path logo perusahaan
    description: [
      'Analyzed training selection data across 50+ programs for 4,000+ employees to support organizational upskilling initiatives.',
      'Visualized feedback from 100+ interns to deliver key insights for future program enhancements.',
      'Built and managed a database of 13 certification institutions, tracking nearly two decades of partnership history.',
      'Delivered strategic HR recommendations based on benchmarking research of 5 peer organizations across Asia.',
    ],
  },
  // Tambahkan pengalaman magang lainnya di sini
];

const InternshipSection = () => {
  return (
    <section id="internship" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Internship Experience
        </h2>
        
        {/* Container untuk semua kartu pengalaman */}
        <div className="space-y-8">
          {internshipData.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row gap-6">
              {/* Logo Perusahaan */}
              <div className="flex-shrink-0">
                <Image
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  width={80}
                  height={64}
                  className="rounded-full object-contain"
                />
              </div>

              {/* Detail Pengalaman */}
              <div className='sm:pr-6'>
                <h3 className="text-2xl font-bold text-gray-100">{exp.role}</h3>
                <p className="text-lg font-medium text-gray-300 mt-1">{exp.company}</p>
                <p className="text-sky-400 text-sm mt-1">{exp.duration}</p>
                
                {/* Deskripsi (Bullet Points) */}
                <ul className="mt-4 space-y-2 text-gray-400">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-x-3">
                      <span className="flex-shrink-0">•</span>
                      <span className="text-justify">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;