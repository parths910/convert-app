import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightComponent } from "./weight/weight.component";
import { LengthComponent } from "./length/length.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'length', component: LengthComponent},
  {path:'weigth', component: WeightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
