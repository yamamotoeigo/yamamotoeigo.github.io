import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Yamamoto's Portfolio",
  description: 'A showcase of my work and skills as a developer',
  icons: {
    icon: "/favicon.ico", // Favicon を設定
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>{children}</body>
    </html>
  )
}

