import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-schem-test-list',
  templateUrl: './list.component.html',
})
export class SchemTestListComponent  {
  schema:SFSchema = {
    properties:{
      email:{
        type:'string',
        title:'邮箱',
        format:'email',
        maxLength:20
      },
      name:{
        type:'string',
        title:'姓名',
        minLength:3
      }
    }
  }

  submit(value:any){
    console.log(value);
  }

}
