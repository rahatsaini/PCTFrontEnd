import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchTableComponent } from './search/search-table/search-table.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'search',component:SearchComponent},
  {path:'searchtable',component:SearchTableComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
