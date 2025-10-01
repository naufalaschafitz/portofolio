import Image from 'next/image';

// Data pengalaman volunteer dan organisasi Anda.
const volunteerData = [
  {
    role: 'Head of External Affairs Department',
    company: 'HMSI ITS (Himpunan Mahasiswa Sistem Informasi)',
    duration: 'Apr 2024 - Dec 2024',
    icon: '/icons/HMSI.jpeg', // Ganti dengan path logo HMSI
    description: [
      'Led all external communication and collaboration efforts for the student association, coordinating with 9+ external partners throughout the term.',
      'Oversaw the planning and execution of 7 organizational programs, ensuring alignment with strategic goals and smooth coordination.',
      'Represented the organization in formal engagements to strengthen partnerships and enhance public relations.',
    ],
  },
  {
    role: 'Staff of Research Technology & Application',
    company: 'HMSI ITS (Himpunan Mahasiswa Sistem Informasi)',
    duration: 'Mar 2023 - Mar 2024',
    icon: '/icons/HMSI.jpeg', // Ganti dengan path logo acara
    description: [
      'Led the Information Systems competition event as Chief Organizer, overseeing 150 participants across six competition divisions.',
      'Supervised the GEMASTIK delegation, ensuring preparation and quality for national-level competition participation.',
      'Led publication efforts for the department’s journal initiatives, producing 6 appreciation posts and internal publications.',
      'Coordinated permits and logistics for the PKTI TD work program, which involved 200+ participants.',
    ],
  },
  {
    role: 'Staff of Sponsorship',
    company: 'Information Systems Expo 2022',
    duration: '2023',
    icon: '/icons/ISE.jpeg', // Ganti dengan path logo acara
    description: [
        'Secured funding and partnerships through sponsorship initiatives, totaling up to 75 million IDR.',
        'Forged strong relationships with sponsors, fostering mutual beneficial collaborations that provided both funding and brand exposure.',
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

              <div className='sm:pr-6'>
                <h3 className="text-2xl font-bold text-gray-100">{exp.role}</h3>
                <p className="text-lg font-medium text-gray-300 mt-1">{exp.company}</p>
                <p className="text-sky-400 text-sm mt-1">{exp.duration}</p>
                
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

export default VolunteerSection;