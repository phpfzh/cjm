import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaArrayComponent } from './array/array.component';
import { SchemaAutocompleteComponent } from './autocomplete/autocomplete.component';
 import { SchemaSchemaBooleanComponent } from './schema-boolean/schema-boolean.component';
import { SchemaCascaderComponent } from './cascader/cascader.component';
import { SchemaCheckbocComponent } from './checkboc/checkboc.component';
import { SchemaCustomComponent } from './custom/custom.component';
import { SchemaDateComponent } from './date/date.component';
import { SchemaNumberComponent } from './number/number.component';
import { SchemaObjectComponent } from './object/object.component';
import { SchemaRadioComponent } from './radio/radio.component';

const COMPONENTS = [
  SchemaArrayComponent,
  SchemaAutocompleteComponent,
   SchemaSchemaBooleanComponent,
  SchemaCascaderComponent,
  SchemaCheckbocComponent,
  SchemaCustomComponent,
  SchemaDateComponent,
  SchemaNumberComponent,
  SchemaObjectComponent,
  SchemaRadioComponent];
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
