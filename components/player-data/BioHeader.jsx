import Image from 'next/image'

function BioHeader({first_name, last_name}){
    return ( <header>
                <h2 className='text-3xl font-semibold'>{first_name} {last_name}</h2>
    
    </header> )
}

export default BioHeader;