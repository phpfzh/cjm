import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsListComponent } from './list/list.component';
import { ForumsListEditComponent } from './list/edit/edit.component';
import { ForumsListViewComponent } from './list/view/view.component';
import { ForumsTableCheckboxComponent } from './table-checkbox/table-checkbox.component';
import { ForumsTableFormComponent } from './table-form/table-form.component';
import {ForumsTableDataComponent} from "./table-data/table-data.component";
import { ForumsTableRadioComponent } from './table-radio/table-radio.component';
import { ForumsG2ListComponent } from './g2-list/g2-list.component';

const COMPONENTS = [
  ForumsListComponent,
  ForumsTableCheckboxComponent,
  ForumsTableDataComponent,
  ForumsTableFormComponent,
  ForumsTableRadioComponent,
  ForumsG2ListComponent];
const COMPONENTS_NOROUNT = [
  ForumsListEditComponent,
  ForumsListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    ForumsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ForumsModule { }
