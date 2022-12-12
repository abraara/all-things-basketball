import {PlayerBioLayout} from '../../components/layouts'
import {BioHeader, BioNavigation, BioTopic} from '../../components/player-data'
import {getPlayers} from '../../libs/getPlayers.js'
import {generateRandomTitle} from '../../libs/generateRandomTitle.js'

function PlayerData({ avatar, first_name, last_name, team, heading, number, ...bio }){
    return (
        <div className="max-w-2xl mx-auto py-20">
            <BioNavigation avatar={avatar}/>
            <BioHeader team={team} first_name={first_name} last_name={last_name} heading={heading} number={number}/>
            <BioTopic topic="About"/>
        </div>
    );


}

export default PlayerData;

export async function getStaticPaths(){
    const players = await getPlayers()
    const paths = players.map(player => ({params:{id:player.id.toString()}}))
    return{
        paths,
        fallback:false,
    };
}

export async function getStaticProps({params}){
    const players = await getPlayers()
    const player = players.find(player => player.id.toString() === params.id)
    const bio = {...player, heading:generateRandomTitle() };

    return{
        props: bio
};
}

PlayerData.getLayout = function getLayout(page){
    return (
        <PlayerBioLayout>
            {page}
        </PlayerBioLayout>
    )
}