import Head from 'next/head' 
import {LandingPageHeader} from '../components/headers'
import {NavBar} from './../components/navigation'

export default function Home() {
  return (
        
          <>
          <Head>
            <meta name="description" content="find the next best react developer for your business. Next Best Dev give you access to North Americas largest pool of React Developers." />
            <title>Next Best Developer</title>
          </Head>
          <LandingPageHeader
          title = "Next Best Developer"
          tagline = "find the perfect developer for your business"
          />
          <main>



          </main>
          </>
     
  )
}
