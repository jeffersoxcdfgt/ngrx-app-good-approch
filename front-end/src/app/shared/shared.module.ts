import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//components
import { PageNotFoundComponent }  from './not-found/not-found.component';

//services
import { HTTP_INTERCEPTORS , HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppInMemoryApi } from '../app.in-memory.api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {MatExpansionModule} from '@angular/material/expansion';

const MATERIAL_MODULES = [
  MatExpansionModule,
]


@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule,
    EffectsModule,
    MATERIAL_MODULES
  ],
  declarations:[
    PageNotFoundComponent,
  ],
  providers:[],
  exports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule,
    EffectsModule,
    PageNotFoundComponent,
    MATERIAL_MODULES
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{

}
