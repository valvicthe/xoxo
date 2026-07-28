import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'xoxo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mockUser = {
    username: 'Benjamin Netanyahu',
    robux: 1500,
    tickets: 320,
  };

  return (
    <html lang="en">
      <body className="bg-dark-base text-slate-100 antialiased min-h-screen flex flex-col">
        <Navbar user={mockUser} />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
