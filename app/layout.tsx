import Header from '@/components/header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Ruwini | Personal Portfolio',
  description: 'Ruwini is a skilled UX/UI designer and Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative h-[5000px] pt-28 sm:pt-20 lg:mx-48`}>

        <Header />
        {children}
      </body>
    </html>
  )
}
