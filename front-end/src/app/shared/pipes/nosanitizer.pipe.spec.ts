import { PipeTransform } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { DomSanitizer } from "@angular/platform-browser";
import { NoSanitizePipe } from "./nosanitizer.pipe"

class DomSanitizerMock {
    bypassSecurityTrustHtml(): string {
      return ''
    }
}

describe('noSanitize',()=>{
    let pipe:NoSanitizePipe;
    let domsanitize:DomSanitizerMock = new DomSanitizerMock();

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [NoSanitizePipe ],
          imports:[],
          providers: [
            { provide: DomSanitizer, useValue: DomSanitizerMock },
          ]
        })       
        pipe = new NoSanitizePipe(domsanitize);
    });

    it('should create',()=>{
        expect(pipe).toBeTruthy()
    })

    it('Html string clean string',()=>{
        const htmlstring ='<p><img src=x" onerror="alert(\'XSS Attack\')"></p>'
        const res = pipe.transform(htmlstring)
        expect(res).toBe('')
    })

    it('Html string clean string when is empty',()=>{
        const htmlstring =''
        const res = pipe.transform(htmlstring)
        expect(res).toBe('')
    })

})