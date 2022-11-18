import { Arena } from "../../models/arena"
import { Player } from "../../models/player"
import { Team } from "../../models/team"
import {  getOnePlayerByTeams, getOneTeamByArenas, joinPlayersAndTeams, joinTeamsAndArenas} from './functions'

const teams :Team[] = [
    {
        id: 1,
        logo: 'logo1',
        name: 'name1',
        Founded: 'Founded1',
        About: 'About1',
        divison: 'divison1',
        arena:1
    }
]

const arenas:Arena[] =[
    {
        id: 1,
        arenaTitle: 'arena1',
        Capacity: '1',
        About: '',
        Logo: '',
        Photo: ''

    }
]


const players:Player[]=[
    {
        id:1,
        photo: 'photo',
        firstname:'firstname',
        lastname: 'lastname',
        birthday: 'birthday',
        country:'country',
        height: 'height',
        weight: 'weight',
        college: 'college',
        nbadebut: 'nbadebut',
        position: 'position',
        team:1,
        number: 'number',
        iconflag:'iconflag'
    }
]


describe('functions by arena',()=>{
    it('joinTeamsAndArenas join teams and arenas',()=>{
        const expected = [
            {
                id: 1,
                logo:'logo1',
                name: 'name1',
                Founded:'Founded1',
                About: 'About1',
                divison: 'divison1',
                arena:  'arena1',
            }
        ]
        const result = joinTeamsAndArenas(teams,arenas)
        expect(result).toEqual(expected)   

    })

    it('joinPlayersAndTeams join players and teams',()=>{
        const expected = [
            {
                id:1,
                photo: 'photo',
                firstname:'firstname',
                lastname: 'lastname',
                birthday: 'birthday',
                country:'country',
                height: 'height',
                weight: 'weight',
                college: 'college',
                nbadebut: 'nbadebut',
                position: 'position',
                team:'name1',
                number: 'number',
                iconflag:'iconflag'
            }
        ]
        const result = joinPlayersAndTeams(players,teams)
        expect(result).toEqual(expected)   
    })

    it('getOneTeamByArenas works fine',()=>{
        const expected ={
            id: 1,
            logo: 'logo1',
            name: 'name1',
            Founded: 'Founded1',
            About: 'About1',
            divison: 'divison1',
            arena:'arena1',
            arenaid:1
        }
        const result = getOneTeamByArenas(teams[0],arenas)
        expect(result).toEqual(expected)   
    })

    it('getOnePlayerByTeams works fine',()=>{
        const expected ={
            ...players[0],
            team:'name1',
            teamid:1
        }
        const result = getOnePlayerByTeams(players[0],teams)
        expect(result).toEqual(expected)   
    })

})

