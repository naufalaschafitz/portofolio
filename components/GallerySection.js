import Image from 'next/image';

const galleryData = [
  // --- HIGH IMPACT & RECENT ACHIEVEMENTS ---
  { src: '/gallery/27.jpg', alt: 'Internship at OJK Institute', description: 'Gaining professional experience in the data field during my internship at the OJK Institute.' },
  { src: '/gallery/28.jpg', alt: 'Final Thesis Defense', description: 'Successfully defending my final thesis with satisfying results, marking the completion of my academic journey.' },
  { src: '/gallery/29.jpg', alt: 'Graduation Day', description: 'The proudest moment: celebrating my graduation from Institut Teknologi Sepuluh Nopember.' },
  { src: '/gallery/24.jpg', alt: 'Capstone Project Meeting', description: 'In a meeting with my faculty advisor, discussing the development of a KPI dashboard for my capstone project.' },
  { src: '/gallery/21.jpg', alt: 'Final Project Presentation: DevOps App', description: 'Successfully presenting our final project on a DevOps application, showcasing practical software development skills.' },
  { src: '/gallery/22.jpg', alt: 'Final Project Presentation: DPP App', description: 'Delivering the final presentation for our DPP application, a culmination of our system design coursework.' },
  { src: '/gallery/18.jpg', alt: 'Head of External Affairs at HMSI', description: 'Leading and representing the student association as the Head of the External Affairs Department at HMSI.' },
  { src: '/gallery/31.jpg', alt: 'Department of the Year Award', description: 'A proud moment as our External Affairs department was recognized as the most innovative department.' },
  { src: '/gallery/19.jpg', alt: 'Steering Committee for Student Regeneration 2024', description: 'Providing guidance and strategic direction as a Steering Committee member for the 2024 regeneration program.' },
  { src: '/gallery/16.jpg', alt: 'Head of Operations PKTI TD 2023', description: 'Leading the operational division as the Head of Operations for the 2023 PKTI TD event.' },
  { src: '/gallery/13.jpg', alt: 'Speaker at University Orientation 2023', description: 'Sharing my journey and motivating new students as a speaker during the 2023 university orientation.' },

  // --- MEDIUM IMPACT & ORGANIZATIONAL ROLES ---
  { src: '/gallery/30.jpg', alt: 'Leading a department meeting', description: 'In the middle of a strategic discussion while leading a meeting as a department head.' },
  { src: '/gallery/20.jpg', alt: 'First official visit as department head', description: 'My first Ormawa Visit as Head of Department, collaborating with the UINSA Student Association.' },
  { src: '/gallery/10.jpg', alt: 'HMSI RTA Staff Meeting', description: 'Collaborating in a routine meeting as a staff member of the Research & Technology Application (RTA) division at HMSI.' },
  { src: '/gallery/14.jpg', alt: 'BMS 2023 Expert Staff', description: 'Serving as an expert staff for security and permits at the Basic Media Schooling 2023 event.' },
  { src: '/gallery/15.jpg', alt: 'Mentoring junior students', description: 'Taking on the role of a mentor for the 2022 student regeneration program, guiding the next cohort.' },
  { src: '/gallery/17.jpg', alt: 'HMSI Internalization Committee', description: 'Working behind the scenes as a committee member for an HMSI internal bonding event in 2023.' },
  { src: '/gallery/7.jpg', alt: 'Odoo ERP Simulation', description: 'Post-simulation session for the Business Process Management class, applying theoretical knowledge of Odoo ERP.' },
  { src: '/gallery/25.jpg', alt: 'IKASI ITS Grand Reunion', description: 'Connecting with the broader alumni network at the IKASI ITS Grand Reunion event.' },
  { src: '/gallery/23.jpg', alt: 'Ormawa Visit with HMTB ITS', description: 'Fostering inter-departmental relations during an official Ormawa Visit with HMTB ITS.' },

  // --- FOUNDATIONAL & EARLY EXPERIENCES ---
  { src: '/gallery/1.jpg', alt: 'First cohort bonding event', description: 'Kicking off the university journey with the first bonding event for the Class of 2021.' },
  { src: '/gallery/4.jpg', alt: 'Official inauguration ceremony', description: 'Officially inaugurated as part of the ITS Information Systems student body, marking the end of our orientation.' },
  { src: '/gallery/3.jpg', alt: 'Pre-Basic Leadership Training (LKMM Pra-TD)', description: 'Participating in pre-basic leadership and management training to build foundational skills.' },
  { src: '/gallery/2.jpg', alt: 'Basic Media Schooling 2022', description: 'Attending the Basic Media Schooling 2022 to learn about digital content and media production.' },
  { src: '/gallery/9.jpg', alt: 'Ormawa Visit participant', description: 'Engaging with external organizations as a participant in an Ormawa (Student Organization) Visit.' },
  { src: '/gallery/12.jpg', alt: 'Gerigi ITS 2023', description: 'Actively participating in Gerigi 2023, one of the largest annual events at ITS.' },
  { src: '/gallery/6.jpg', alt: 'Supporting ITS competitions', description: 'Showing university spirit while supporting ITS teams during an inter-departmental competition.' },
];


const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Activity Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryData.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-gray-800"> {/* Tambah bg-gray-800 */}
              {/* Container untuk rasio 16:9 */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* Rasio 16:9 (9/16 * 100%) */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill // Mengisi seluruh area parent div
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimalisasi gambar
                  className="object-cover absolute top-0 left-0 w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Deskripsi di bawah foto */}
              <p className="p-4 text-gray-300 text-sm">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;