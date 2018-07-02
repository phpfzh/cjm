import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsListComponent } from './list/list.component';
import { ForumsListEditComponent } from './list/edit/edit.component';
import { ForumsListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  ForumsListComponent];
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
