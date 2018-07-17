import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-schema-select',
  templateUrl: './select.component.html',
})
export class SchemaSelectComponent{
  schema:SFSchema = {
      properties:{
          status:{
            type:'string',
            title:'状态',
            enum:[
              { label: '待支付', value: 'WAIT_BUYER_PAY' },
              { label: '已支付', value: 'TRADE_SUCCESS' },
              { label: '交易完成', value: 'TRADE_FINISHED' }
            ],
            default:'WAIT_BUYER_PAY',
            ui:{
              widget:'select'
            }
          },
          tags:{
            type:'string',
            title:'标签',
            enum:[
              { label: '待支付', value: 'WAIT_BUYER_PAY' },
              { label: '已支付', value: 'TRADE_SUCCESS' },
              { label: '交易完成', value: 'TRADE_FINISHED' }
            ],
            ui:{
              widget:'select',
              mode:'tags'
            }
          },
        async:{
            type:'string',
            title:'Async',
            ui:{
              widget:'select',
              asyncData:() => of([
                {
                  label: '订单状态',
                  group: true,
                  children: [
                    { label: '待支付', value: 'WAIT_BUYER_PAY' },
                    { label: '已支付', value: 'TRADE_SUCCESS' },
                    { label: '交易完成', value: 'TRADE_FINISHED' }
                  ]
                }
              ]).pipe(delay(1200))
            }
        }
      }

  }

  constructor(private mz:NzMessageService){}

  submit(val:any){
      this.mz.success(JSON.stringify(val))
  }
}
