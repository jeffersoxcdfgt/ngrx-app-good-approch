import { ResponseLogin } from "../model/login";

export const getThisState = (stateName:any, key?:string) => {
    try{     
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null){ return undefined; }

        if(key){
            return JSON.parse(serializedState)[key]
        }
        return JSON.parse(serializedState);
    }catch (err){
        return undefined;
    }
  };

export const getItem = (itemName:any, key?:string) => {
    const items = getThisState(itemName,key);
    if (items === undefined) {
        return {todos : []};
    } else {
        return items;
    }
  };
export const clearStorage = () => localStorage.clear();