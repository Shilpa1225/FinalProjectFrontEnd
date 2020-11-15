import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiddingComponent } from './bidding/bidding.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
   {path:"",redirectTo:'/list','pathMatch':'full' },
  {path:"list",component:ListComponent},
  {path:"details",component:DetailsComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"bidding",component:BiddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
