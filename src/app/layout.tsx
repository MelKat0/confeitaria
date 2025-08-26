import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confeitaria",
  description: "Site de divulgação de bólos de pote, em NEXT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
