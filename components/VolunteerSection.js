import Image from 'next/image';

// Data pengalaman volunteer dan organisasi Anda.
const volunteerData = [
  {
    role: 'Head of External Affairs Department',
    company: 'HMSI ITS (Himpunan Mahasiswa Sistem Informasi)',
    duration: 'Apr 2024 - Dec 2024',
    icon: '/icons/HMSI.jpeg', // Ganti dengan path logo HMSI
    description: [
      'Led a team to manage relationships with external stakeholders including companies, alumni, and other universities.',
      'Initiated and executed collaborative events, increasing student engagement by 30%.',
      'Our department was recognized as the "Most Innovative Department" for the period.',
    ],
  },
  {
    role: 'Staff of Research Technology & Application',
    company: 'HMSI ITS (Himpunan Mahasiswa Sistem Informasi)',
    duration: 'Mar 2023 - Mar 2024',
    icon: '/icons/HMSI.jpeg', // Ganti dengan path logo acara
    description: [
      'Provided strategic guidance and oversight for the annual student regeneration program.',
      'Mentored the organizing committee and ensured the event\'s objectives were met.',
    ],
  },
  {
    role: 'Staff of Sponsorship',
    company: 'Information Systems Expo 2022',
    duration: '2023',
    icon: '/icons/ise.jpeg', // Ganti dengan path logo acara
    description: [
        'Managed all operational aspects of the event, including logistics, scheduling, and on-site coordination.',
        'Led a team of staff to ensure the smooth execution of the event for all participants.',
    ],
  },
];

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Volunteer & Organization
        </h2>
        
        <div className="space-y-8">
          {volunteerData.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                  className="rounded-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-100">{exp.role}</h3>
                <p className="text-lg font-medium text-gray-300 mt-1">{exp.company}</p>
                <p className="text-sky-400 text-sm mt-1">{exp.duration}</p>
                
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
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

export default VolunteerSection;