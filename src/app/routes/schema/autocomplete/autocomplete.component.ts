import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {of} from "rxjs/index";

@Component({
  selector: 'app-schema-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class SchemaAutocompleteComponent {
  schema:SFSchema = {
    properties:{
      format:{
        type:"string",
        title:"Format",
        format:"email"
      },
      widget:{
        type:"string",
        title:"指定widget",
        ui:{
          widget:"autocomplete",
          type:'email'
        }
      },
      async:{
        type:'string',
        title:"异步",
        ui:{
          widget:'autocomplete',
          debounceTime:100,
          asyncData:(input:string) => of(input ? [input,input+input,input+input+input]:[])
        }
      }
    }
  }


  submit(val:any){
    console.log(val)
  }

}
