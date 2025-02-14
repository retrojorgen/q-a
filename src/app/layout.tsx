import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
// applying header from Novacare site
import Header from '../components/Header';

// Poppins font used on Novacare site
const poppins = Poppins({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Novacare - spørsmål og svar',
  description: 'Dette må du vite om Novacare',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased text-text`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
