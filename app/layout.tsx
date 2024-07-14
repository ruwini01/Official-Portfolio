import Header from '@/components/header'
import './globals.css'
import { Poppins } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

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
    <html lang="en" className='!scroll-smooth'>
      <body className={`${poppins.className} relative h-auto pt-28 sm:pt-20 lg:mx-48`}>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}
