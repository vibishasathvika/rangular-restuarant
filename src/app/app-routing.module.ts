import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantsComponent } from './add-restuarants/add-restuarants.component';
import { DeleteRestuarantsComponent } from './delete-restuarants/delete-restuarants.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantsComponent } from './update-restuarants/update-restuarants.component';
import { ViewRestuarantsComponent } from './view-restuarants/view-restuarants.component';

const routes: Routes = [
  //define path for each component
  //resturentlist components ,''=localhost:4200
  {
    path:'',component:RestuarantsListComponent,
  },
  //view restorent components
  {
    path:'view-restuarants/:id',component:ViewRestuarantsComponent,
  },
  //add resturent components
  {
    path:'add-restuarants',component:AddRestuarantsComponent
  },
  //update resurent module
  {
    path:'update-restuarants/:id',component:UpdateRestuarantsComponent
  },
  //delete resturent components
  {
    path:'delete-restuarants/:id',component:DeleteRestuarantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
