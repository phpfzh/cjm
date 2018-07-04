import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsListComponent } from './list/list.component';
import { ForumsTableCheckboxComponent } from './table-checkbox/table-checkbox.component';
import {ForumsTableDataComponent} from "./table-data/table-data.component";
import { ForumsTableFormComponent } from './table-form/table-form.component';
import { ForumsTableRadioComponent } from './table-radio/table-radio.component';

const routes: Routes = [

  { path: 'list', component: ForumsListComponent },
  { path: 'table-data', component: ForumsTableDataComponent },
  { path: 'table-checkbox', component: ForumsTableCheckboxComponent },
  { path: 'table-form', component: ForumsTableFormComponent },
  { path: 'table-radio', component: ForumsTableRadioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
