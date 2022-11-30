import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-black text-slate-600 font-bold ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pointguard">PG</Link>
        </li>
        <li>
          <Link href="/shootingguard">SG</Link> 
        </li>
        <li>
          <Link href="/smallforward">SF</Link> 
        </li>
        <li>
          <Link href="/powerforward">PF</Link> 
        </li>
        <li>
          <Link href="/center">C</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;