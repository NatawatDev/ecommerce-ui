import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/system";

import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NextUIProvider>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl py-8 px-4 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-2 text-[14px] text-[#595959] bg-[#F2F2F2]">
              Copyright 2023 Online Shop
            </footer>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
