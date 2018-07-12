import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SchemTestRoutingModule } from './schem-test-routing.module';
import { SchemTestListComponent } from './list/list.component';

const COMPONENTS = [
  SchemTestListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    SchemTestRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class SchemTestModule { }
