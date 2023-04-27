import './globals.css'

export const metadata = {
  title: 'Grant Finder',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#090A0D]'>{children}</body>
    </html>
  )
}
