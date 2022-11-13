import Head from 'next/head' 

export default function Home() {
  return (
        
          <>
          <Head>
            <meta name="description" content="find the next best react developer for your business. Next Best Dev give you access to North Americas largest pool of React Developers." />
            <title>Next Best Developer</title>
          </Head>
          <header className='text-center py-[10rem]'>
            <img className='w-[98px] mx-auto' src="myfavicon.svg" alt="next best developer" />
             <h1 className='text-6xl font-bold'>Next Best Developer</h1>
             <p className='font-bold'>find the perfect developer for your business</p>
          </header>
          </>
     
  )
}
