import {getPlayers} from '../libs/getPlayers';
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {PlayerCard} from '../components/players'

function CenterPage({c}) {
  console.log(c)

  return ( 
      <>
      { c.map(player=> <PlayerCard key={player.id} 
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

export default CenterPage;

  CenterPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='C'  title='Best Centers in the NBA' tagline='the best rebounders, blockers, and paint scorers' >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const players = await getPlayers()

    const cPlayers = players.filter(player=> player.position ==='Center')
    return{
        props:{
            c:cPlayers
        }
    }
  }
