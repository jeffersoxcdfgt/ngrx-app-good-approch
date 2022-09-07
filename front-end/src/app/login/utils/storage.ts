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

export const saveItem = (key:any, data:any) => {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
  };

export const getItemByKey = (key:any) => {
    try{
        const serializedState = localStorage.getItem(key);
        if (serializedState === null){ return undefined; }
        return JSON.parse(serializedState);
    }catch (err){
        return undefined;
    }
  };

export const deleteItemByKey = (key:any) => localStorage.setItem(key, '');

export const emptyLocalStorage = (reducerkeys:any) => {

    try{
        if (undefined !== reducerkeys && reducerkeys.length > 0){
            reducerkeys.forEach((key:string) => {
                localStorage.setItem(key, '');
            });
        }
    }catch (err){
        // console.log("ERROR===emptyLocalStorage==>>>")
    }
  };

export const clearStorage = () => localStorage.clear();