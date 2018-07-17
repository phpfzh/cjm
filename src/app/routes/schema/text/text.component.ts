import {Component, OnInit, ViewChild} from '@angular/core';
import {filter} from 'rxjs/operators';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent} from '@delon/abc';
import {SFSchema} from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-text',
  templateUrl: './text.component.html',
})
export class SchemaTextComponent {

  schema: SFSchema = {
    properties: {
      id1: {type: 'string', ui: {widget: 'text'}},
      id2: {type: 'number', ui: {widget: 'text', defaultText: 'defaule text'}},
      name: {
        type: 'string',
        title:'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        }
      },
      remark:{
        type:'string',
        title:'描述',
        ui:{
          widget:'textarea',
          autosize:{
            minRows:2,
            maxRows:6
          }
        }
      },
      time:{
        type:'string',
        format:'time'
      },
      time_number:{
         type:'number',
         ui:{
            widget:'time'
         }
      },
      'time_string': {
        'type': 'string',
        ui: { widget: 'time' }
      }
    }
  }

  constructor(private mz: NzMessageService) {
  }

  submit(val: any) {
    this.mz.success(JSON.stringify(val));
  }
}
