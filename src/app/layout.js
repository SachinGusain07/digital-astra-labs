import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

// Metadata for SEO - Works because this is a Server Component
export const metadata = {
  title: "Digital Astra Labs | Mobile & Web App Development",
  description: "Digital Astra Labs specializes in Flutter mobile apps, React.js web apps, and scalable backend systems.",
  keywords: "Mobile app development, Web app development, Flutter, React.js, MVP development, Startups",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Add this here */}
      </body>
    </html>
  );
}