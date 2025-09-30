// components/AboutSection.js

const AboutSection = () => {
  return (
    // Kita beri padding vertikal (py-20) agar ada jarak dari section sebelumnya
    <section id="about" className="py-20 px-6 ">
      
      {/* Container ini membatasi lebar konten agar nyaman dibaca di layar lebar */}
      <div className="max-w-4xl mx-auto">
        
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Tentang Saya
        </h2>

        {/* Konten Paragraf */}
        <div className="text-lg text-gray-300 space-y-6">
          <p>
            An Indonesian fresh Information Systems graduate (born in 2003) with hands-on experience in Excel, Python, Power BI, SQL, and R for data processing and visualization.
          </p>
          <p>
            I earned my bachelors degree with a strong track record in both academics and organizational leadership. Currently based in Bekasi, I am focused on self-development through online learning and small entrepreneurial activities while actively seeking a data-related role.
          </p>
          <p>
            Outside of the professional world, I am passionate about staying active and enjoy exercising at the gym. I am also an avid spectator of sports, closely following both football and basketball. I believe these interests help me maintain a balanced and disciplined mindset.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;