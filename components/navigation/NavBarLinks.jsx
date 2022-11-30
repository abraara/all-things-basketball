import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden md:flex gap-4 text-black text-slate-600 font-bold ">
        <li>
          <Link className='hover:underline hover:text-orange-400 focus:text-orange-500' href="/">Home</Link>
        </li>
        <li>
          <Link className='hover:underline hover:text-orange-400 focus:text-orange-500' href="/pointguard">PG</Link>
        </li>
        <li>
          <Link className='hover:underline hover:text-orange-400 focus:text-orange-500' href="/shootingguard">SG</Link> 
        </li>
        <li>
          <Link className='hover:underline hover:text-orange-400 focus:text-orange-500' href="/smallforward">SF</Link> 
        </li>
        <li>
          <Link className='hover:underline hover:text-orange-400 focus:text-orange-500' href="/powerforward">PF</Link> 
        </li>
        <li>
          <Link className='hover:underline hover:text-orange-400 focus:text-orange-500' href="/center">C</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;