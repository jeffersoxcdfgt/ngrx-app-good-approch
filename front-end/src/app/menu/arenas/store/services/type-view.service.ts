

import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable()
export class TypeViewService {
  
  constructor(){ }
   /**
   * Set Type View
   */
   public setTypeView(data: string): Observable<string>{
    return of(data)
  }
   
}