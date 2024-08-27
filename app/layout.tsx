import Header from '@/components/header'
import './globals.css'
import { Poppins } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'

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
      <body className={`${poppins.className} relative h-auto pt-28 sm:pt-20 mx-4 lg:mx-48 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

      
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
        <ThemeSwitch/>
        
      </body>
    </html>
  )
}
