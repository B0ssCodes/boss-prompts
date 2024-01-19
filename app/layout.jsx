

import Script from 'next/script';

import '../styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Boss Prompts",
    description: "Discover & Share AI Prompts"

}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <head>
        <meta name="google-adsense-account" content="ca-pub-3861449097607847"/>
        </head>
        <body>
    <Provider>
    <Script 
    id="adsbygoogle" 
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3861449097607847"
    strategy="beforeInteractive"
    crossorigin="anonymous"
    async
  />
      <Script 
        id="googletagmanager" 
        async 
        src="https://www.googletagmanager.com/gtag/js?id=G-3CY9XEL1Q8"
      />
      <Script 
        id="gtag-config" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push('arguments')}
          gtag('js', new Date());

          gtag('config', 'G-3CY9XEL1Q8');
        `}
      </Script>
      
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Nav />
        {children}
      </main>
    </Provider>
    </body>
    </html>
  )
}

export default RootLayout