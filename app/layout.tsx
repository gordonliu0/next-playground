import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className + " flex min-h-screen flex-col items-center justify-between p-4 sm:p-24"}>
          <div className="z-10 w-full max-w-5xl items-center justify-center lg:flex">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
