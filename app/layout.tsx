import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Acc 343 Exam 2',
  description: 'Kyle Edades',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={`bg-sky-200 min-h-screen flex flex-col ${inter.className}`}>
        <NavBar />
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
