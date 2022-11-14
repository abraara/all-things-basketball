import Image from 'next/image'
import myfaviconImage from './../../public/myfavicon.svg'

function LandingPageHeader({title, tagline, ...props}) { return (
<header className='text-center py-[5rem]'>
    <figure>
        <figcaption>
    <Image className='w-[98px] mx-auto'
    src={myfaviconImage}
    alt="next best developer"
    />

 <h1 className='text-6xl font-bold'>{title}</h1>
 <p className='font-bold'>{tagline}</p>
 </figcaption>
 </figure>
</header>
    );
}

export default LandingPageHeader;