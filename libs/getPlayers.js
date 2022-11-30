import path from 'path'
import {promises as fs} from 'fs'


export async function getPlayers(){
    const filePath = path.join(process.cwd(), './mock/players.json')
    return JSON.parse(await fs.readFile(filePath, 'utf-8'))
}