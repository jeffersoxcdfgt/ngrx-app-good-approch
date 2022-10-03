import { Team } from "../../models/team";
import { Arena } from "../../models/arena";

export const joinTeamsAndArenas = (teams: Team[], arenas:Arena[]) =>{
    return teams.map((team: Team) => {
        return arenas
            .filter((arena:Arena) =>  arena.id === team.arena)
            .map((rowarenas: Arena)=> ({
                id: team.id,
                logo: team.logo,
                name: team.name,
                Founded: team.Founded,
                About: team.About,
                divison: team.divison,
                arena: rowarenas.arenaTitle
            }))
    })
    .reduce((a,b)=>{
        return a.concat(b)
    },[])
}

export const getOneTeamByArenas = ( team: Team , arenas: Arena[] ):Team =>{
    return arenas.filter((arena:Arena) => arena.id === team.arena)
        .map((dataarena:Arena)=>({
              ...team,
              arena:dataarena.arenaTitle,
              arenaid:dataarena.id
            }
        ))
        .reduce((before,after)=>({ ...before, ...after}))
}