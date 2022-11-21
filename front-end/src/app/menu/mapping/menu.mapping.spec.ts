import { of } from "rxjs"
import { ResponseLogin } from "src/app/login/model/login"
import { GET_OBJ_USER, GET_USER_NAME } from "./menu.mapping"

describe('Testing mapping functions',()=>{
    const response : ResponseLogin  = {
        status: 'success',
        token: '741258963',
        email:'admin@admin.com',
        password:'admin'
     }

    it('GET_USER_NAME works fine',()=>{
        const result = of(response).pipe(GET_USER_NAME)
        result.subscribe((data)=>{
            expect(data).toEqual(response)
        })
    })

    it('GET_OBJ_USER works fine',()=>{
        const result = of(response).pipe(GET_OBJ_USER)
        result.subscribe((data)=>{
            expect(data).toEqual(response)
        })
    })

})