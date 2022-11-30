import path from 'path'
import {promises as fs} from 'fs'
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
      team={player.team} />
      )}

     
      </> 

  );
}

export default CenterPage;

  CenterPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='centers'  title='Best Centers in the NBA' tagline='the best rebounders, blockers, and paint scorers' >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/players.json')
    const players = JSON.parse(await fs.readFile(filePath, 'utf8'))

    const cPlayers = players.filter(player=> player.position ==='Center')
    return{
        props:{
            c:cPlayers
        }
    }
  }
