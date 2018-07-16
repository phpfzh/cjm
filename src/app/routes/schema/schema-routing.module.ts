import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [

  { path: 'array', component: SchemaArrayComponent },
  { path: 'autocomplete', component: SchemaAutocompleteComponent },
  { path: 'test', component: SchemaSchemaBooleanComponent },
  { path: 'cascader', component: SchemaCascaderComponent ,data:{title: '仪表盘', titleI18n: 'dashbo'}},
  { path: 'checkboc', component: SchemaCheckbocComponent},
  { path: 'custom', component: SchemaCustomComponent },
  { path: 'date', component: SchemaDateComponent },
  { path: 'number', component: SchemaNumberComponent },
  { path: 'object', component: SchemaObjectComponent },
  { path: 'radio', component: SchemaRadioComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemaRoutingModule { }
