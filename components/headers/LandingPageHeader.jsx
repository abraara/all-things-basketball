import Image from 'next/image'
import bannerImage from './../../public/banner.jpg'

function LandingPageHeader({title, tagline, ...props}) { return (
<header   className="w-full sm:h-2/3 md:h-3/12 lg:h-3/12 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/banner.jpg)", height:600}} >
    
    <figure className='float-left'>
        <figcaption className="text-white w-11/12 lg:w-full pt-40 px-7">
            <h1 className='text-5xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl'>
        <span className="block -mt-1">{title}.</span> All The Time 
        </h1>
        <p className='font-light lg:text-2xl xl:text-3xl'>{tagline}</p>
 </figcaption>

 </figure>
</header>
    );
}

export default LandingPageHeader;