import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import {SFSchema, SFUISchema} from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-custom',
  templateUrl: './custom.component.html',
})
export class SchemaCustomComponent{

  constructor(private mg:NzMessageService){}

  schema:SFSchema = {
    properties:{
      name:{
        type:'string',
        title:'姓名'
      },

      custom:{
        type:'string',
        title:'自定义内容',
        ui:{
          widget:'custom',
         },
        default:'test'
      },
      age:{
        type:'number',
        title:'年龄',
        ui:{
          widget:'number',
         },
        default:12

      },

      tags:{
        type:'string',
        title:'爱好',
        enum:['送水','送饭','送衣服'],
        ui:{
          widget:'checkbox',

        }
      },
      custom2:{
        type:'string',
        title:'自定义内容2',
        ui:{
          widget:'custom',
        },
        default:'test'
      },
    }
  }

  ui = {
    order:['tags']
  }

    submit(val:any){

      this.mg.success(JSON.stringify(val));
    }

}
