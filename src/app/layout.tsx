'use client'

import './_styles/globals.css'
import '@fontsource/roboto/300.css'
import { withProviders } from './_providers'
import { useLayoutEffect } from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    let fontSize = localStorage.getItem('fontSize')
    if (fontSize) {
      document.body.style.fontSize = fontSize
    }
  }, [])

  return (
    <html lang='en'>
      <body>
        {children}
        <div id='modalRoot'></div>
      </body>
    </html>
  )
}

export default withProviders(RootLayout)
