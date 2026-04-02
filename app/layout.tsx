import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johan & Signe",
  description: "Velkommen til bryllupet vårt! Vi gleder oss til å feire denne spesielle dagen sammen med dere. Her finner du all informasjon du trenger om tid, sted og program for bryllupet vårt. Vi håper å se deg der!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} relative h-full overflow-x-hidden antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden">{children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
