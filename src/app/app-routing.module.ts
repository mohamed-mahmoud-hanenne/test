import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskrouteComponent } from './taskroute/taskroute.component';
import { TableComponent } from './table/table.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:TaskrouteComponent
  },

  {
    path:'table',
    component:TableComponent
  },

  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
