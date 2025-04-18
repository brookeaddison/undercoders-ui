// src/app/layout.tsx

import "./globals.css";
import SiteFooter from "../../components/SiteFooter";
import Navbar from "../../components/Navbar";
import Providers from "./providers";

export const metadata = {
  title: "Undercoders",
  description: "Learn. Connect. Level Up.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        }}
      >
        <Providers>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
