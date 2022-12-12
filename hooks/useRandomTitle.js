const words =
  "Alley-oop backboard center defense forward guard half-time inbound jump ball pick and roll post power forward point guard shooting guard slam dunk small forward technical foul traveling turnover violation air ball and one box out buzzer beater court vision crossover cut face-up fadeaway fast break flagrant foul floater give and go hook shot jump hook key lay-in lead no look pass off-ball on-ball pivot put-back reverse screen skyhook swish triple-double up-and-under wing zone defense airborne breakaway cherry-picking double dribble euro step fast break flagrant foul give and go hang time inbound juke man-to-man motion offense offensive rebound pick-and-roll pump fake put-back reverse layup set shot step-back transition underhanded weak-side wrap-around alley-oop backdoor bank shot blind pass crossover dead ball euro-step fake half-court in-and-out jump stop no-look outlet play-making power move step-through turnaround up-fake wing x-out zone defense Court ball hoop net dribble pass shoot dunk foul rebound block steal coach team game score win loss jump shot layup free throw three-pointer assist foul line half court full court fast break timeout overtime Michael Jordan LeBron James Kareem Abdul-Jabbar Kobe Bryant Shaquille O'Neal youth leagues professional teams Air ball assist backboard block buzzer beater center court defense dribble dunk fast break foul free throw guard half court half-time inbound jump ball lay-up net offence pass post rebound score shot clock steal three-pointer timeout traveling turnover violation".split(
    " "
  );

const joiner = "and with for is was the using of".split(" ");
const numberOfWordsInTitle = randomNumber(3, 5);

let title = ``;

function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function toUpper(makeUpperCase) {
  const word = makeUpperCase;
  const firstLetter = word.substring(0, 1).toUpperCase();
  const rest = word.substring(1, word.length);
  return firstLetter + rest;
}

export function useRandomTitle(){
    let title = ''
   
    for (let i = 0; i < numberOfWordsInTitle; i++) {
       
      if (i === 1) {
        //   title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
          title += " With"  ;
        }
           
        if (i === 3) {
            // title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
            title += " For The"  ;
        }
        title += " " + toUpper(words[Math.floor(Math.random() * words.length)]);
      }
      
      return title
}