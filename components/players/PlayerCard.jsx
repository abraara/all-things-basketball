import Image from 'next/image'
import Link from 'next/link';

function PlayerCard({first_name, last_name, avatar, number, Salary, team, id}) {
    return ( 
        <aside className='w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_1rem)]  
        py-10 border border-gray-200/50 rounded-md shadow-md'>
            <Link href={`/profile/${id}`}>
            <header className='flex flex-col items-center'>
                <Image
                src={avatar}
                alt="player card"
                width={128}
                height={128}
                className="rounded-full border border-gray-400/20 p-1 bg-gray-400/10" 
                />
                <h2 className='text-3xl font-semibold'>{first_name} {last_name}</h2>
            </header>
            <dl className='flex flex-col items-center text-black text-sm'>
                <dt className='sr-only'>Number</dt>
                <dd className='text-2xl  font-semibold'>#{number}</dd>
                <dt className='sr-only'>Team</dt>
                <dd className='mb-1 text-lg w-8/12 text-center font-semibold border-b-2 border-black'>{team}</dd>

                <dt className='sr-only'>Salary</dt>
                <dd className='mb-4 text-lg'>Salary: {Salary}</dd>
              </dl>
            </Link>
        </aside>


     );
}

export default PlayerCard;