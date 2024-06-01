import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Providers from "~/components/Providers";
import Navbar from "~/components/Navbar";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
