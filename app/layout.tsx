import type { Metadata } from 'next'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Muneeb Ur Rehman | Software Engineer | Web & Game Developer',
  description: 'Portfolio of Muneeb Ur Rehman - Aspiring Software Engineer specializing in Web and Game Development. Currently pursuing Bachelor\'s in Software Engineering at Fast NUCES.',
  keywords: 'Muneeb Ur Rehman, Software Engineer, Web Developer, Game Developer, React, Next.js, TypeScript',
  authors: [{ name: 'Muneeb Ur Rehman' }],
  openGraph: {
    title: 'Muneeb Ur Rehman | Software Engineer',
    description: 'Portfolio of Muneeb Ur Rehman - Aspiring Software Engineer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

