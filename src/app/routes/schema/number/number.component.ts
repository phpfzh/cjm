import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-schema-number',
  templateUrl: './number.component.html',
  styles:[`
    :host /deep/ .ant-input-number{
      width:280px;
    }
  `]
})
export class SchemaNumberComponent {

  schema:SFSchema = {
    properties:{
      number:{
        type:'number',
        minimum:1,
        maximum:1000,
        ui:{
          formatter:(value:number) =>{
            if(value == null){
              return value;
            }
            return `$ ${value}`
          },
          precision:5,
          class:["input-num"]
        }
       },
      integer:{
        type:'integer',
        default:10
      }
    }
  }

  submit(val:any){
    console.log(val)
  }
}
