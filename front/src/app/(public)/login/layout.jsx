import head from "./head"
export const metadata = {
  title: 'IESB - login',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head/>
      <body>{children}</body>
    </html>
  )
}
