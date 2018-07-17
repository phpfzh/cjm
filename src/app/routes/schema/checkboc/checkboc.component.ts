import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {of} from "rxjs/index";
import {delay} from "rxjs/operators";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-checkboc',
  templateUrl: './checkboc.component.html',
})
export class SchemaCheckbocComponent  {

  constructor(private ms:NzMessageService){}

  schema:SFSchema = {
      properties:{
        single:{
          type:'boolean',
          title:'同意本协议',
          description:'《用户协议》',
          ui: {
            widget: 'checkbox'
          },
          default:true
        },
        mulit:{
          type:'boolean',
          title:'Mulit',
          enum:['Apple','Pear','Orange'],
          ui:{
            widget:'checkbox',
            checkAll:'1',
            span:8
          },
          default:['Apple']
        },
        mulit2:{
          type:'boolean',
          title:'Mulit',
          enum:['Apple','Pear','Orange'],
          ui:{
            widget:'checkbox',
            checkAll:'1',
            span:8
          },
          default:['Apple']
        },
        async:{
          type:'string',
          title:'Async',
          ui:{
            widget:'checkbox',
            asyncData:() =>
              of([
                { label: 'Apple', value: 'Apple' },
                { label: 'Pear', value: 'Pear' },
                { label: 'Orange', value: 'Orange' },
              ]).pipe(delay(200))
          }
        }

      }
  }

  submit(val:any){
    console.log(val);
    this.ms.info(JSON.stringify(val));

    [
      {checkall:true,list:[{name:1},{name:2}]},
      {checkall:false,list:[{name:1},{name:2}]},
     ]
  }
}
