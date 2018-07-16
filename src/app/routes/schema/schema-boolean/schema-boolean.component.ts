import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-schema-schema-boolean',
  templateUrl: './schema-boolean.component.html',
})
export class SchemaSchemaBooleanComponent{

  schema:SFSchema = {
      properties:{
        status:{
          type:'boolean',
          title:'是否启用'
        },
        enabled:{
          type:'boolean',
          title:'是否启用',
          ui:{
            checkedChildren:'开',
            uncheckedChildren:'关'
          }
        }
      }
  }

  submit(val:any){
    console.log(val);
  }
}
