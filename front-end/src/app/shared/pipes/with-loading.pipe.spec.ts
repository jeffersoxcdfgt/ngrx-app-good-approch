import { Observable, of, throwError , throwIfEmpty} from "rxjs";
import { WithLoadingPipe } from "./with-loading.pipe"

describe('withLoading',()=>{
    let pipe = new WithLoadingPipe;

    beforeEach(()=>{
        pipe = new WithLoadingPipe();
    })

    it('should create',()=>{
        expect(pipe).toBeTruthy()
    })

    it('use transform in right way withLoading',()=>{
        const value = of({type:'start', value:'jefferson'})
        const obs$ = pipe.transform(value)
        obs$.subscribe((data:any)=>{
            expect(data.loading).toEqual(true)
        })
    })
    
    it('use transform in right way without type',()=>{
        const value = of('jefferson')
        const obs$ = pipe.transform(value)
        obs$.subscribe((data:any)=>{
            expect(data.hasOwnProperty('loading')).toEqual(true)
        })
    })

    it('use transform in right way is not Observable',()=>{
        const value = {type:'start', value:'jefferson'}
        const res = pipe.transform(value)
        expect(res).toEqual(value)      
    })
})