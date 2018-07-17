import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-tag',
  templateUrl: './tag.component.html',
})
export class SchemaTagComponent {

  schema:SFSchema = {
    properties:{
       like:{
         type:'number',
         title:'兴趣',
         enum:[
           { value: 1, label: '电影' },
           { value: 2, label: '书' },
           { value: 3, label: '旅行' }
         ],
         ui:{
           widget:'tag'
         },
         default:[1,2]
       }
    }
  }

constructor(private mz:NzMessageService){}

  submit(val:any){
      this.mz.success(JSON.stringify(val));
  }
}
