import path from 'path'
import {promises as fs} from 'fs'
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {PlayerCard} from '../components/players'

function SmallForwardPage({sf}) {
  console.log(sf)

  return ( 
      <>
      { sf.map(player=> <PlayerCard key={player.id} 
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

export default SmallForwardPage;

SmallForwardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type="small forwards"
      title="The Best Small Forwards in the NBA"
      tagline="the most fearless, strong, and quick players" >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/players.json')
    const players = JSON.parse(await fs.readFile(filePath, 'utf8'))

    const sfPlayers = players.filter(player=> player.position ==='Small Foward')
    return{
        props:{
            sf:sfPlayers
        }
    }
  }