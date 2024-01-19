
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1814557852881278"
     crossorigin="anonymous"></script>
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-3CY9XEL1Q8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-3CY9XEL1Q8');
</script>
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