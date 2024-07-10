import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-gray-50 relative h-[5000px]`}>
        <div className='bg-[#fecaca] absolute top-[10rem] right-[11rem] h-[15.25rem] w-[35.25rem] rounded-full blur-[6rem] sm:w-[68.75rem]'></div>

        <div className='bg-[#ffffff] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <Header/>
        {children}
        </body>
    </html>
  )
}
