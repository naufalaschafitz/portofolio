import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Data sertifikasi Anda
const certificationsData = [
  {
    title: 'Google Data Analytics Specialization Certificate',
    issuer: 'Google Career Certificates',
    date: 'Issued Oct 2024',
    logo: '/icons/google.png', // Ganti dengan path logo yang benar
    url: 'https://www.coursera.org/account/accomplishments/specialization/R1LGZFWKICQ5', // Link ke kredensial
  },
  {
    title: 'Devnet Associate',
    issuer: 'Cisco Networking Academy',
    date: 'Issued Jul 2024',
    logo: '/icons/Cisco.png', // Ganti dengan path logo yang benar
    url: 'https://www.credly.com/badges/7ad47769-63d8-4ce4-91ab-4490bdac619b',
  },
  {
    title: 'Introduction to SAP S/4HANA',
    issuer: 'SAP University Alliances',
    date: 'Issued Jul 2023',
    logo: '/icons/SAP.png', // Ganti dengan path logo yang benar
    url: 'https://drive.google.com/file/d/1HHbXu9K1SU1Ve_2tWAI-l9QOf6iCg5_b/view?usp=sharing',
  },  
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Licenses & Certifications
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <a 
              key={index} 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col hover:bg-gray-700 transition-colors duration-300"
            >
              {/* Bagian Atas: Logo dan Judul */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-100">{cert.title}</h3>
                  <p className="text-md text-gray-300">{cert.issuer}</p>
                </div>
              </div>

              {/* Bagian Bawah: Tanggal dan Link */}
              <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center">
                <p className="text-sm text-gray-400">{cert.date}</p>
                <div className="flex items-center gap-1 text-sky-400">
                  <span className="text-sm font-semibold">View</span>
                  <FaExternalLinkAlt size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;