import Image from 'next/image'

function PlayerCard({first_name, last_name, avatar, number, Salary, team}) {
    return ( 
        <aside className='w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_1rem)]  
        py-10 border border-gray-200/50 rounded-md shadow-md'>
            <header className='flex flex-col items-center'>
                <Image
                src={avatar}
                width={128}
                height={128}
                className="rounded-full border border-gray-400/20 p-1 bg-gray-400/10" 
                />
                <h2 className='text-2xl font-semibold'>{first_name} {last_name}</h2>
            </header>
            <dl className='flex flex-col items-center text-gray-400 text-sm'>
                <dt className='sr-only'>Number</dt>
                <dd className='text-lg text-gray-600 font-semibold'>#{number}</dd>

                <dt className='sr-only'>Salary</dt>
                <dd className='mb-4'>Salary: {Salary}</dd>

                <dt className='sr-only'>Team</dt>
                <dd className='mb-4'>{team}</dd>
              </dl>
        </aside>


     );
}

export default PlayerCard;