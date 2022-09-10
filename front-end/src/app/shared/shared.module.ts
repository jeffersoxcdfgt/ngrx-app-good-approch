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
import { InputCustomComponent } from './components/input-custom/input-custom.component';
import { NullObjectToConvertPipe } from './pipes/null-object-value.pipe';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { NoSanitizePipe } from './pipes/nosanitizer.pipe';

export const MATERIAL_MODULES = [
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
]

export const PIPES_LIST = [
  NullObjectToConvertPipe,
  NoSanitizePipe,
]


@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule,
    EffectsModule,
    MATERIAL_MODULES
  ],
  declarations:[
    PageNotFoundComponent,
    InputCustomComponent,
    PIPES_LIST,
    FooterComponent
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
    InputCustomComponent,
    PIPES_LIST,
    MATERIAL_MODULES,
    FooterComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{

}
