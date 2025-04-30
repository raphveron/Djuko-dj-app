import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Djuko Web App",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <div className="lights">
            {/* Background lights/images can be added here */}
          </div>
          <main className="main-wrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
