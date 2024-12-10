import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/system";

import Navbar from "@/components/navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Natawat - Ecommerce</title>
        <meta name="description" content="The website is used as a tool for testing to apply for a full-stack developer position." />
        <link rel="icon" href="/shopping-cart.svg" type="image/png" />
      </head>
      <body>
        <NextUIProvider>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl py-4 px-4 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-1 text-[14px] text-[#595959] bg-[#F2F2F2]">
              Copyright 2023 Online Shop
            </footer>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
