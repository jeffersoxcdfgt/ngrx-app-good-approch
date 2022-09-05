import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

//Components
import { PageNotFoundComponent } from './shared/not-found/not-found.component';

const routes:Routes = [
  { path:'' , redirectTo:'/login' , pathMatch:'full'},
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(h => h.LoginModule)
  },
  {
    path:'menu',
    loadChildren: () => import('./menu/menu.module').then(h => h.MenuModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
