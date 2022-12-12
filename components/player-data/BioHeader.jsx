import Image from 'next/image'

function BioHeader({first_name, last_name, team, number, heading}){
    return ( 
    <header className="max-w-2xl mb-5">
            <h2 className='text-4xl font-semibold'>{first_name} {last_name} | #{number}</h2>
            <h4 className='text-2xl'>{team} | {heading}</h4>
            <p className="mt-3 text-base text-zinc-600 ">
            Motion offense offensive rebound pick-and-roll pump fake put-back reverse layup set shot step-back transition underhanded weak-side wrap-around alley-oop backdoor bank shot blind pass crossover dead ball euro-step fake half-court in-and-out jump stop no-look outlet play-making power move step-through turnaround up-fake wing x-out zone defense.
        </p>
    </header>
     );
}

export default BioHeader;