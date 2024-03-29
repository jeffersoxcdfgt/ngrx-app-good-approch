import { filter } from "rxjs/operators"
import { Arena } from "../models/arena"
import { Player } from "../models/player"
import { ReagularSeasonGame } from "../models/regular-season-game"
import { Team } from "../models/team"

 export const removejscssfile = (filename:any, filetype:any) =>{
    const targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    const allsuspects:any=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1){
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
      }        
    }
 }

 export const RemoveEnd  = (param:string) =>{
  const res:any = document.querySelectorAll(param)
  if(!!res && res.length > 0){
    res[0].remove();
  }  
 }


 export const CLEANDATAARRAY =  filter((val:any|Arena[]|Player[]|Team[]|ReagularSeasonGame[]) => val.length >0)