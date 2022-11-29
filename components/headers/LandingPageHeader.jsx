import Image from 'next/image'
import bannerImage from './../../public/banner.png'

function LandingPageHeader({title, tagline, ...props}) { return (
<header className= ' p-10 bg-gradient-to-b from-orange-500 to-yellow-300'>
    
    <figure className='flex flex-col justify-center items-center md:flex-row'>
        <figcaption>
        <h1 className='text-4xl font-bold text-center md:text-5xl lg:text-6xl xl:text-7xl'>{title}</h1>
        <p className='font-bold text-center lg:text-2xl xl:text-3xl'>{tagline}</p>
 </figcaption>
    <Image className='w-[300px] md:p-0'
        src={bannerImage}
        alt="basketball"
        />
 </figure>
</header>
    );
}

export default LandingPageHeader;