import { getThisState, getItem } from "./storage";

describe('test storage functions',()=>{
     it('getThisState key value',()=>{
        const jsonstr = `{
            "requestdata":{
                "status": "success",
                "token": "741258963",
                "email":"admin@admin.com",
                "password":"admin"
            }         
        }`
         spyOn(localStorage,'getItem').and.returnValue(jsonstr)  
         const result = getThisState('keytest',JSON.parse(jsonstr).requestdata);
         expect(result).toBe((jsonstr as any).requestdata)
     })
     
     it('getThisState without key value',()=>{
        const jsonstr = `{
            "requestdata":{
                "status": "success",
                "token": "741258963",
                "email":"admin@admin.com",
                "password":"admin"
            }         
        }`
         spyOn(localStorage,'getItem').and.returnValue(jsonstr)  
         const result = getThisState(JSON.parse(jsonstr).requestdata);
         expect(result).toEqual(JSON.parse(jsonstr))
     }) 

     it('getThisState Error malformed json string',()=>{
        const jsonstr = `
            "requestdata":{
                "status": "success",
                "token": "741258963",
                "email":"admin@admin.com",
                "password":"admin"
            }         
        }`
         spyOn(localStorage,'getItem').and.returnValue(jsonstr)  
         const result = getThisState(jsonstr);
         expect(result).toBe(undefined)
     }) 

     it('getItem return one just one element',()=>{
         const jsonstr = '{"name":"John", "age":30, "car":null}';
         spyOn(localStorage,'getItem').and.returnValue(jsonstr);
         const result = getItem(jsonstr,'name');
         expect(result).toBe('John');
     }) 

})