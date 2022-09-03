import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { LoginComponent } from './login.component';

const loginRoutes : Routes  =  <Routes>[{
  path:'',
  component :LoginComponent,
}];

@NgModule({
  imports:[
    RouterModule.forChild(loginRoutes)
  ],
  exports:[RouterModule]
})
export class LoginRoutingModule {
}

export const loginRoutedComponents = [
  LoginComponent,
]
