import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import {SFComponent, SFSchema} from '@delon/form';
import {log} from "util";

@Component({
  selector: 'app-schema-array',
  templateUrl: './array.component.html',
})
export class SchemaArrayComponent  {

  @ViewChild("sf")  sf : SFComponent;

  schema:SFSchema = {
      properties :{
          product:{
            type:'array',
            title:"产品清单",
            maxLength:4,
            items:{
               type:"object",
               properties:{
                 name:{
                    type:"string",
                    title:"名称"
                 },
                 price:{
                   type:"number",
                   title:"单价",
                   minimum:1
                 }
               },
               required:["name","price"]
             }
           }
      }

  }

  formSubmit(val:any){
     this.sf.validator();
    console.log(this.sf.valid);
    console.log(val);
  }

}
