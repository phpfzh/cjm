import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemaArrayComponent } from './array/array.component';
import { SchemaAutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes = [

  { path: 'array', component: SchemaArrayComponent },
  { path: 'autocomplete', component: SchemaAutocompleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemaRoutingModule { }
