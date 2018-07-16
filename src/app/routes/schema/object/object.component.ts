import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-object',
  templateUrl: './object.component.html',
})
export class SchemaObjectComponent {

    schema:SFSchema = {
      properties:{
        name:{type:'string'},
        age:{type:'number'}
      },
      required:['name','age'],
      ui:{
        spanLabel:4,
        spanControl:5
      }

    }

    constructor(private ms:NzMessageService){

    }

    submit(value:any){
      this.ms.success(JSON.stringify(value));
    }

}
