import Head from 'next/head' 
import {LandingPageHeader} from '../components/headers'
import {NavBar} from './../components/navigation'

export default function Home() {
  return (
        
          <>
          <Head>
            <meta name="description" content="one stop shop for everything basketball. Find what basketball info you're looking for with All Things Basketball." />
            <title>All Things Basketball</title>
          </Head>
          <LandingPageHeader
          title = "All Things Basketball"
          tagline = "whatever you need, we have it."
          />
          <main>



          </main>
          </>
     
  )
}
