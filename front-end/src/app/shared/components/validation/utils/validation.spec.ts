import { TestScheduler } from 'rxjs/testing';
import { throttleTime , of, interval, from } from 'rxjs';
import * as funcValidation from './validation';
import { concatMap , delay , concatAll , take, map, filter, tap,reduce, toArray ,scan} from 'rxjs/operators'

describe('Test validation functions',()=>{

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
      });

    // This test runs synchronously. 
    testScheduler.run((helpers) => {
       const { cold, time, expectObservable, expectSubscriptions , hot, animate } = helpers;

       it('scan works fine', () => {
        const values = { a:'jefferson', b:' medina', x:'jefferson', y:'jefferson medina'}
        const source = cold('-a-b|',values);
        const expected ='    -x-y|'
        const result = source.pipe(scan((a:string,b:string)=>  a+b,''))
        expectObservable(result).toBe(expected,values)  
       })

       it('reduce works fine',() =>{
        const values = { a:'jefferson', b:' medina',c:'jefferson medina'}
        const source = cold('-(ab|)',values);
        const expected='    -(c|)'
        const result = source.pipe(reduce((a:string,b:string)=>  a+b,''))
        expectObservable(result).toBe(expected,values) 
       })

       
       it('cleanBlank works fine',()=>{   
        const result = of('string  ').pipe(funcValidation.cleanBlank)
        result.subscribe((data)=>{
            expect(data).toBe('string')
        })
       })

       it('cleanBlank works fine when is empty',()=>{   
        const result = of('').pipe(funcValidation.cleanBlank)
        result.subscribe((data)=>{
            expect(data).toBe('')
        })
       })

       it('cleanBlank works fine when is array',()=>{   
        const result = of(['string']).pipe(funcValidation.cleanBlank)
        result.subscribe((data)=>{
            expect(data).toEqual(['string'])
        })
       })

       it('validateEmail works fine',()=>{
        const result = of('jefferson@hotmail.com').pipe(funcValidation.validateEmail)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('validateEmail works fine when is not right email',()=>{
        const result = of('jeffersonhotmail.com').pipe(funcValidation.validateEmail)
        result.subscribe((data)=>{
            expect(data).toEqual(false)
        })
       })

       it('passwordLength greater than 6',()=>{
        const result = of('password12122323').pipe(funcValidation.passwordLength)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('passwordLength less than 6',()=>{
        const result = of('123').pipe(funcValidation.passwordLength)
        result.subscribe((data)=>{
            expect(data).toEqual(false)
        })
       })

       it('onlyNumber works fine',()=>{
        const result = of('12354').pipe(funcValidation.onlyNumber)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('onlyNumber works fine is not right number',()=>{
        const result = of('1235e4').pipe(funcValidation.onlyNumber)
        result.subscribe((data)=>{
            expect(data).toEqual(false)
        })
       })  
       
       it('creditCardLength works fine',()=>{
        const result = of('1234567895963218').pipe(funcValidation.creditCardLength)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       }) 

       it('creditCardLength works fine when is not right',()=>{
        const result = of('123').pipe(funcValidation.creditCardLength)
        result.subscribe((data)=>{
            expect(data).toEqual(false)
        })
       }) 

       it('nameLength works fine',()=>{
        const result = of('namefine').pipe(funcValidation.nameLength)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('nameLength works fine when is not met the condition',()=>{
        const result = of('namefine').pipe(funcValidation.nameLength)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('nameLength works fine when is greater than 10 ',()=>{
        const result = of('namefine454545454545').pipe(funcValidation.nameLength)
        result.subscribe((data)=>{
            expect(data).toEqual(false)
        })
       })

       it('descriptionLength works fine ',()=>{
        const result = of('namefine454545454545').pipe(funcValidation.descriptionLength)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('descriptionLength works fine when is greater 116 ',()=>{
        const result = of('1'.repeat(200)).pipe(funcValidation.descriptionLength)
        result.subscribe((data)=>{
            expect(data).toEqual(false)
        })
       })

       it('ifEmpty works fine when length ==0',()=>{
        const result = of('jefferson').pipe(funcValidation.ifEmpty)
        result.subscribe((data)=>{
            expect(data).toBeTruthy()
        })
      
       })

       it('ifChecked works fine ',()=>{
        const result = of(true).pipe(funcValidation.ifChecked)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })

       it('validObs works fine ',()=>{
        const result = of(true).pipe(funcValidation.validObs)
        result.subscribe((data)=>{
            expect(data).toEqual(true)
        })
       })


     })
});