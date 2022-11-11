import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'noSanitize' })
export class NoSanitizePipe implements PipeTransform {
  constructor(private domSanitizer: any|DomSanitizer) { }

  transform(html: string | undefined): SafeHtml {
    if(html){
        return this.domSanitizer.bypassSecurityTrustHtml(html);     
    }
    return ''
  }
}