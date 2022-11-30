import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {PlayerCard} from '../components/players'
import {getPlayers} from '../libs/getPlayers';

function PointGuardPage({pg}) {

    console.log(pg)

    return ( 
        <>
        { pg.map(player=> <PlayerCard key={player.id} 
        first_name={player.first_name} 
        last_name={player.last_name} 
        avatar={player.avatar} 
        number={player.number} 
        Salary={player.Salary} 
        team={player.team} />
        )}

       
        </> 

    );
}

export default PointGuardPage;

PointGuardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type="point guards"
      title="Best Point Guards in the NBA"
      tagline="the best passers and ball handlers" >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
   const players = await getPlayers()

    const pgPlayers = players.filter(player=> player.position ==='Point Guard')
    return{
        props:{
            pg:pgPlayers
        }
    }
  }