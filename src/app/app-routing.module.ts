import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonPremierComponent } from './mon-premier/mon-premier.component';


const routes: Routes = [{path: "mon-premier", component: MonPremierComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
