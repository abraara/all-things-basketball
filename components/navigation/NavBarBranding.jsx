import {LogoSvg} from './../icons'
import Link from 'next/link'
function NavBarBranding({className, ...props}) {
    return (
        <Link href="/">
        <figure className='flex items-center'>
        <LogoSvg className="w-6"/>
        <figcaption>
            <h1 className='font-bold'>All Things Ball</h1>
        </figcaption>
    </figure>
    </Link>
      );
}

export default NavBarBranding;