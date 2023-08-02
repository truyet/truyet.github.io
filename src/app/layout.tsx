import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const inter = Lato({ subsets: ['latin'], weight: ["300","400", "700", "900"] })

export const metadata: Metadata = {
  title: 'Truyet Nguyen - Backend Engineer',
  description: 'Backend Engineer, Golang, Java, Nodejs, DevOps, CICD, Leader, Architecture, Technical',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-gray-200`}>{children}</body>
    </html>
  )
}
