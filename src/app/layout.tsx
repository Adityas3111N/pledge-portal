import type { Metadata } from "next";
import { Inter, Gotu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gotu = Gotu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gotu",
});

export const metadata: Metadata = {
  title: "Digital Portal for Seamless Government Review",
  description: "Streamlined pledge and development review system endorsed by Government of Uttar Pradesh",
};

import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased min-h-screen flex flex-col ${inter.variable} ${gotu.variable}`} suppressHydrationWarning>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
