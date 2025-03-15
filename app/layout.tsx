import { ReactNode } from 'react'

import '@/app/globals.css'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  // return (
  //   <html>
  //     <body>{children}</body>
  //   </html>
  // )
  return children
}
