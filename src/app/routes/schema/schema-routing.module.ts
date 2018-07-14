import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemaArrayComponent } from './array/array.component';

const routes: Routes = [

  { path: 'array', component: SchemaArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemaRoutingModule { }
