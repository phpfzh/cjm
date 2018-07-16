import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-date',
  templateUrl: './date.component.html',
})
export class SchemaDateComponent {

  constructor(private mg:NzMessageService){

  }

  schema:SFSchema = {
     properties:{
       datetime: {
         type: 'string',
         format: 'date-time',
         ui:{
           displayFormat:'yyyy-MM-dd HH:mm:ss'
         }
       },
       dateline: {
         type: 'number',
         ui:{
           widget:'date',
           showTime:true
          }
       },
       date:{
         type:'string',
         format:'date'
       },
       date_number:{
          type:'number',
          ui:{
            widget:'date'
          }
       },
       month:{
         type:'string',
         format:'month'
       },
       week:{
         type:'string',
         format:'week'
       },
       range:{
         type:'string',
         ui:{
           widget:'date',
           mode:'range',
           showTime:true
         }
       }
     }
  }

  change(val:any){
    this.mg.success(JSON.stringify(val))
  }

  submit(val:any){
    this.mg.success(JSON.stringify(val));
    console.log(val)
  }
}
