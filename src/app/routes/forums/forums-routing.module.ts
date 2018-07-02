import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: ForumsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
