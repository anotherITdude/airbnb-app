import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'AnotherItDude | Airbnb App',
  description: 'Airbnb app using NextJS, Typescript, Tailwind CSS and Authentication using next-auth',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
