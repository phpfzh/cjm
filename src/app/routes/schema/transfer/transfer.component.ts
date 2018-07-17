import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-transfer',
  templateUrl: './transfer.component.html',
})
export class SchemaTransferComponent {

  schema:SFSchema = {
    properties:{
      roles:{
        type:'number',
        title:'角色',
        enum:[
          { title: 'DNS管理', value: 10 },
          { title: 'ECS管理', value: 11 },
          { title: 'OSS管理', value: 12 },
          { title: 'RDS管理', value: 13 }
        ],
        ui:{
          widget:'transfer',
          titles:['未拥有','已拥有']
        }
      }
    }
  }

  constructor(private ms:NzMessageService){}

  submit(val:any){
    this.ms.success(JSON.stringify(val));
  }
}
