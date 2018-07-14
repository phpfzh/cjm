import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaArrayComponent } from './array/array.component';

const COMPONENTS = [
  SchemaArrayComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    SchemaRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class SchemaModule { }
