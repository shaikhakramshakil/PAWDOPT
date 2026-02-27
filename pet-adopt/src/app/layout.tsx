import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "PawPal – Find Your Furry Friend",
  description: "Cute pastel pet adoption platform connecting shelters with loving families.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg">
        {/* Top navigation */}
        <Navbar />

        <div className="flex">
          {/* Left sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 p-8 ml-[260px] mt-[80px] min-h-[calc(100vh-80px)] relative overflow-hidden">
            {/* Decorative paw watermarks */}
            <span className="paw-watermark text-[200px] -top-10 -right-10 rotate-12">🐾</span>
            <span className="paw-watermark text-[160px] bottom-10 left-10 -rotate-12">🐾</span>

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
