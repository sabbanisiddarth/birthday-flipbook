import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Birthday Flipbook',
  description: 'A beautiful 3D digital flip-book birthday wishes website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
