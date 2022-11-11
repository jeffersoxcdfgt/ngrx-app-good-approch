import { NullObjectToConvertPipe } from "./null-object-value.pipe"

describe('nullObjectToConvert',()=>{
    let pipe = new NullObjectToConvertPipe;

    beforeEach(()=>{
        pipe = new NullObjectToConvertPipe();
    })

    it('should create',()=>{
        expect(pipe).toBeTruthy()
    })
  
    it('use transform in right way',()=>{
        const value = {name:'jefferson'}
        const field = 'name'
        const res = pipe.transform(value,field)
        expect(res).toBe('jefferson')
    })

    it('use transform in right way when is empty',()=>{
        const value = ''
        const field = 'name'
        const res = pipe.transform(value,field)
        expect(res).toBe('')
    })

})