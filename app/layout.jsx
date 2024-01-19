import Head from 'next/head';
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
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1814557852881278"
     crossorigin="anonymous"></script>
        </Head>
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