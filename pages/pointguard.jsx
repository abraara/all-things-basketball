import path from 'path'
import {promises as fs} from 'fs'
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {PlayerCard} from '../components/players'

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
    const filePath = path.join(process.cwd(), './mock/players.json')
    const players = JSON.parse(await fs.readFile(filePath, 'utf8'))

    const pgPlayers = players.filter(player=> player.position ==='Point Guard')
    return{
        props:{
            pg:pgPlayers
        }
    }
  }