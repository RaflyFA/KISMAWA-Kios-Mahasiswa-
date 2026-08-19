import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KISMAWA — Kios Mahasiswa | KOPMA UNSIL',
  description: 'Katalog produk KISMAWA, Kios Mahasiswa dari KOPMA UNSIL untuk kebutuhan kampusmu.',
  icons: {
    icon: '/logo kismawa.jpeg',
    shortcut: '/logo kismawa.jpeg',
    apple: '/logo kismawa.jpeg',
  },
  openGraph: {
    title: 'KISMAWA — Kios Mahasiswa | KOPMA UNSIL',
    description: 'Temukan buket, hampers pilihan mahasiswa di KISMAWA.',
    type: 'website',
    images: [{ url: '/og-kismawa.svg', width: 1200, height: 630, alt: 'KISMAWA — Kios Mahasiswa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KISMAWA — Kios Mahasiswa | KOPMA UNSIL',
    description: 'Katalog produk KISMAWA dari KOPMA UNSIL.',
    images: ['/og-kismawa.svg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#a3c3e6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="bg-[#8cb3d9]">
      <head>
        <link rel="icon" href="/logo kismawa.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo kismawa.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo kismawa.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
