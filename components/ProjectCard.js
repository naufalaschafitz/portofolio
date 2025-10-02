import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300">
      {/* Bagian compact (yang selalu terlihat) */}
      <div className="p-6 cursor-pointer" onClick={() => onToggle(project.id)}>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/3 flex-shrink-0">
            <Image
              src={project.image}
              alt={`${project.title} thumbnail`}
              width={400}
              height={250}
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span key={cat} className="bg-sky-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full self-start">
                  {cat}
                </span>
              ))}
            </div>    
            <h3 className="text-2xl font-bold text-gray-100 mt-3">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tools.map((tool) => (
                <span key={tool} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
            {/* 2. Ganti tombol dengan teks dinamis */}
            <div className="text-sky-400 mt-auto self-start font-semibold pt-4">
              {isExpanded ? 'View Less ▲' : 'View Details ▼'}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bagian expanded (hanya muncul jika isExpanded true) */}
      {/* Kita gunakan transisi max-height untuk animasi buka-tutup */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="border-t border-gray-700 p-6">
          <h4 className="text-xl font-semibold text-gray-100 mb-4">
            Project Details
          </h4>
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <h4 className="text-xl font-semibold text-gray-100 mb-4">
            Gallery
          </h4>
          <div className="relative px-12 max-w-2xl mx-auto"> 
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: `.swiper-button-next-${project.id}`, // Custom class untuk tombol next
                prevEl: `.swiper-button-prev-${project.id}`, // Custom class untuk tombol prev
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-lg"
            >
              {project.galleryImages.map((imgSrc, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  {/* 2. Ubah cara render Image agar rasio bebas */}
                  <Image
                    src={imgSrc}
                    alt={`Project gallery image ${index + 1}`}
                    width={1280}  // Angka ini untuk menentukan rasio, bukan ukuran tetap
                    height={720} // Angka ini untuk menentukan rasio, bukan ukuran tetap
                    className="w-full h-auto object-contain" // object-contain agar tidak terpotong
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Tombol Navigasi Kustom di Luar */}
            <div className={`swiper-button-prev swiper-button-prev-${project.id}`}></div>
            <div className={`swiper-button-next swiper-button-next-${project.id}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;