import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

// Metadata for SEO - Works because this is a Server Component
export const metadata = {
  title: "Digital Astra Labs | Mobile & Web App Development",
  description: "Digital Astra Labs specializes in Flutter mobile apps, React.js web apps, and scalable backend systems.",
  keywords: "Mobile app development, Web app development, Flutter, React.js, MVP development, Startups",
  
  // 1. Favicon and Device Icons
  icons: {
    icon: "/logo2.png",         // Standard Favicon
    shortcut: "/logo2.png",     // Shortcut Icon
    apple: "/logo2.png",       // For iOS Home Screen
  },

  // 2. Social Media Preview Logo (Open Graph)
  openGraph: {
    title: "Digital Astra Labs",
    description: "Architecting scalable digital products for global startups.",
    url: "https://digital-astra-labs.vercel.app/",
    siteName: "Digital Astra Labs",
    images: [
      {
        url: "/logo2.png", // This image shows up when sharing the link on WhatsApp/LinkedIn
        width: 800,
        height: 600,
        alt: "Digital Astra Labs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 3. Twitter Card Preview
  twitter: {
    card: "summary_large_image",
    title: "Digital Astra Labs",
    description: "Mobile & Web App Development Company",
    images: ["/logo2.png"],
  },
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