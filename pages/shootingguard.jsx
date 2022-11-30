import path from 'path'
import {promises as fs} from 'fs'
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {PlayerCard} from '../components/players'

function ShootingGuardPage({sg}) {
  console.log(sg)

  return ( 
      <>
      { sg.map(player=> <PlayerCard key={player.id} 
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

export default ShootingGuardPage;

ShootingGuardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type="shooting guards"
      title="Best Shooting Guards in the NBA"
      tagline="the best 3 point shooters with lethal accuracy" >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/players.json')
    const players = JSON.parse(await fs.readFile(filePath, 'utf8'))

    const sgPlayers = players.filter(player=> player.position ==='Shooting Guard')
    return{
        props:{
            sg:sgPlayers
        }
    }
  }