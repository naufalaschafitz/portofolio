import Image from 'next/image';

const educationData = [
  {
    year: '2021 - 2025',
    degree: 'Sarjana Komputer',
    department: 'Sistem Informasi',
    institution: 'Institut Teknologi Sepuluh Nopember',
    icon: '/icons/its.png',
    description: 'Focused on data analytics, project management, and system design. Actively involved in the student executive board as Head of the IT Division.',
  },
  {
    year: '2019 - 2021',
    degree: 'Science',
    institution: 'SMA Islam Al-Azhar 4',
    icon: '/icons/alazhar.png',
    description: 'Graduated with honors, participated in national physics olympiads and was the captain of the basketball team.',
  },
  // Tambahkan riwayat pendidikan lainnya di sini
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
              
              <div className="z-10 flex items-center bg-sky-500 shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto text-white font-semibold text-lg"></div>
              </div>

              {/* 3. Modifikasi kartu konten untuk menampilkan logo */}
              <div className="bg-gray-800 rounded-lg shadow-lg w-full sm:w-5/12 p-6">
                <p className="text-sky-400 font-semibold text-sm mb-2">{edu.year}</p>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={edu.icon}
                    alt={`${edu.institution} logo`}
                    width={45} // Atur ukuran logo
                    height={45}
                    className="rounded-full object-contain" // rounded-full jika logonya lingkaran
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">{edu.institution}</h3>
                    <p className="text-md font-medium text-gray-300">
                      {edu.degree}
                      {edu.department && ` - ${edu.department}`} {/* Tampilkan jurusan jika ada */}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;