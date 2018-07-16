import { Component, OnInit, ViewChild } from '@angular/core';
import { filter ,map} from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import {SFComponent, SFSchema} from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";
 import {RegisterService} from "@core/service/register.service";

@Component({
  selector: 'app-schema-radio',
  templateUrl: './radio.component.html',
  providers:[RegisterService]
})
export class SchemaRadioComponent implements OnInit{
  @ViewChild('sf') sf: SFComponent;
    schema:SFSchema = {
        properties:{
            sex:{
              type:'string',
              title:'Sex',
              enum:['男','女','未知'],
              ui:{
                widget:'radio',
                styleType:'button'
              },
              default:'未知'
            },
          sex2:{
            type:'string',
            title:'Sex2',
            enum:[],
            ui:{
              widget:'radio',
             },
            default:'未知'
          },
          async:{
              type:'string',
              title:'Async',
              enum:[],
              ui:{
                widget:'radio',
                asyncData:() => this.re.generateUserName().pipe(
                     map((rep) => {
                         return [rep.data.username];
                     })
                )
            }
          }
        }
    }

    constructor(private mg:NzMessageService,private re:RegisterService){}

    submit(val:any){
      console.log(val);
    }

    ngOnInit(){
      this.re.generateUserName().subscribe(rep => {
           this.schema.properties.sex2.enum = [rep.data.username];
          this.sf.refreshSchema();
      })
    }
}
