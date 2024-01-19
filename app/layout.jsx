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
        <meta name="google-adsense-account" content="ca-pub-1814557852881278" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1814557852881278"
     crossorigin="anonymous"></Script>
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3CY9XEL1Q8"></Script>
     <Script strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(&apos;arguments&apos;)}
    gtag(&apos;js&apos;, new Date());

    gtag(&apos;config&apos;, &apos;G-3CY9XEL1Q8&apos;);
  `}
</Script>
        </head>
        <body>
    <Provider>
      
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