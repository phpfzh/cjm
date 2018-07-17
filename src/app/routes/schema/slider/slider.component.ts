import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-slider',
  templateUrl: './slider.component.html',
})
export class SchemaSliderComponent  {

  schema : SFSchema = {
    properties:{
      count:{
        type:'number',
        title:'数量',
        ui:{
          widget:'slider',
          vertical:true
          },
        default:10
      },
      range:{
        type:'number',
        title:'范围',
        ui:{
           widget:'slider',
           range:true,
         },
        default:[10,20]
      }
    }
  }

  constructor(private  mz:NzMessageService){}

   submit(val:any){
     this.mz.success(JSON.stringify(val));
   }
}
