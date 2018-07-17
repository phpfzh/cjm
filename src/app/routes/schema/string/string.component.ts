import {Component, OnInit, ViewChild} from '@angular/core';
import {filter} from 'rxjs/operators';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent} from '@delon/abc';
import {SFSchema} from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-string',
  templateUrl: './string.component.html',
})
export class SchemaStringComponent {

  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        }
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号'
      },
      sfz:{
        type:'string',
        format:'id-card',
        title:'身份证号'
      },
      color:{
        type:'string',
        format:'color',
        title:'颜色'
      }
    },
    required:['name']
  }


  constructor(private mz: NzMessageService) {
  }

  submit(val: any) {
    this.mz.success(JSON.stringify(val));
  }
}
