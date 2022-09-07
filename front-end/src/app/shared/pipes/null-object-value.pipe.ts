import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nullObjectToConvert'
  })
  export class NullObjectToConvertPipe implements PipeTransform {
  
    transform(value: any, field: string , ): any {   
        return !!value ? value[field]:value
    }
  
  }