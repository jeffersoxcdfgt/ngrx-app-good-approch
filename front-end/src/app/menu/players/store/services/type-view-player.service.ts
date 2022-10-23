

import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable()
export class TypeViewPlayerService {
  
  constructor(){ }
   /**
   * Set Type View
   */
   public setTypeViewPlayer(data: string): Observable<string>{
    return of(data)
  }
   
}