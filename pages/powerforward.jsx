import {getPlayers} from '../libs/getPlayers';
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {PlayerCard} from '../components/players'

function PowerForwardPage({pf}) {
  console.log(pf)

  return ( 
      <>
      { pf.map(player=> <PlayerCard key={player.id} 
      first_name={player.first_name} 
      last_name={player.last_name} 
      avatar={player.avatar} 
      number={player.number} 
      Salary={player.Salary} 
      team={player.team} 
      id={player.id}
      />
      )}

     
      </> 

  );
}

export default PowerForwardPage;

PowerForwardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type="PF"
      title="Best Power Forwards in the NBA"
      tagline="the most dependable, defensively strong scorers" >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const players = await getPlayers()

    const pfPlayers = players.filter(player=> player.position ==='Power Forward')
    return{
        props:{
            pf:pfPlayers
        }
    }
  }