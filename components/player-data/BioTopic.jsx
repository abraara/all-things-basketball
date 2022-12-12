import { AiOutlineRight } from 'react-icons/ai'

function BioTopic({topic}) {
  return (
    <article >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        {topic}
      </h2>

      <p className=" mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      Alley-oop backboard center defense forward guard half-time inbound jump ball pick and roll post power forward point guard shooting guard slam dunk small forward technical foul traveling turnover violation air ball and one box out buzzer beater court vision crossover cut face-up fadeaway fast break flagrant foul floater give and go hook shot jump hook key lay-in lead no look pass off-ball on-ball pivot put-back reverse screen skyhook swish triple-double up-and-under wing zone defense airborne breakaway cherry-picking double dribble euro step fast break flagrant foul give and go hang time inbound juke man-to-man motion offense.
      </p>
      <footer className="my-4 flex items-center text-sm font-medium text-orange-500">
        <h3>read more</h3>
        <AiOutlineRight className='text-base'/>
      </footer>
    </article>
  );
}

export default BioTopic;