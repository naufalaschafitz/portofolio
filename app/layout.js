import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BacktoTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Judul utama yang muncul di tab browser dan hasil pencarian Google
  title: "Naufal Aschafitz | Data Analyst & Project Management Portfolio",
  
  // Deskripsi singkat (muncul di bawah judul di Google)
  description: "Portfolio of Naufal Aschafitz, an Information Systems graduate from ITS, showcasing projects in data analytics, visualization, and project management using Python, Power BI, and SQL.",
  
  // Kata kunci untuk membantu mesin pencari
  keywords: ["Data Analyst", "Project Management", "Information Systems", "ITS", "Portfolio", "Naufal Aschafitz", "Power BI", "SQL", "Python"],
  
  // --- Open Graph (OG) Metadata untuk Social Media ---
  openGraph: {
    title: "Naufal Aschafitz | Data Analyst & Project Management Portfolio",
    description: "Explore my projects in data analytics and project management.",
    // URL lengkap website Anda setelah di-deploy nanti
    url: 'https://nama-domain-anda.com', // Ganti nanti setelah deploy
    siteName: 'Naufal Aschafitz Portfolio',
    images: [
      {
        url: '/og-image.jpeg', // Path ke gambar yang Anda siapkan di folder public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> {/* <-- 2. Tambahkan Navbar di sini */}
        <main>{children}</main> {/* children ini adalah page.js Anda */}
        <Footer /> {/* <-- 3. Tambahkan Footer di sini */}
        <BackToTopButton /> 
      </body>
    </html>
  );
}

