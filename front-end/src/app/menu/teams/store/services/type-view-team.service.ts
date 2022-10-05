

import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable()
export class TypeViewTeamService {
  
  constructor(){ }
   /**
   * Set Type View
   */
   public setTypeViewTeam(data: string): Observable<string>{
    return of(data)
  }
   
}