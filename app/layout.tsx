import './globals.css'
import { Nunito } from 'next/font/google'

export const metadata = {
  title: 'AnotherItDude | Airbnb App',
  description: 'Airbnb app using NextJS, Typescript, Tailwind CSS and Google Authentication using next-auth',
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
      <body className={font.className}>{children}</body>
    </html>
  )
}
