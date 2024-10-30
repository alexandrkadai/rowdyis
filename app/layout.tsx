import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import './globals.css';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from './api/uploadthing/core';
import { Copyright } from 'lucide-react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'ROWDY',
  description: 'Rowdy next gen shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
        <footer className="px-[50px] sm:px-[100px] lg:px-[120px] xl:px-[240px] mt-10 mb-10 flex items-center justify-center">
          <div className="flex flex-row uppercase font-bold gap-5 textlg">
            <Copyright size={24} />
            <span className="">Rowdy</span>
            <span className="">UKraine</span>
            <span className="">Kiev</span>
            <span>All Rights Reserved</span>
            <span>Terms And Conditions</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
