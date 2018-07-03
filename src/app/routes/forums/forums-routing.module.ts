import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsListComponent } from './list/list.component';
import { ForumsTableCheckboxComponent } from './table-checkbox/table-checkbox.component';
import {ForumsTableDataComponent} from "./table-data/table-data.component";

const routes: Routes = [

  { path: 'list', component: ForumsListComponent },
  { path: 'table-data', component: ForumsTableDataComponent },
  { path: 'table-checkbox', component: ForumsTableCheckboxComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
