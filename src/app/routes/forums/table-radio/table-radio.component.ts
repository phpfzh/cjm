import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent, SimpleTableData} from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-forums-table-radio',
  templateUrl: './table-radio.component.html',
})
export class ForumsTableRadioComponent implements OnInit {

    params: any = {a:1,b:3, "_allow_anonymous":true};
    url = `https://randomuser.me/api/?results=3`;
    searchSchema: SFSchema = {
      properties: {
        no: {
          type: 'string',
          title: '编号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    total = 100;
    columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id.value', type: 'radio' },
    { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
   ];

    constructor(private http: _HttpClient, private modal: ModalHelper) { }

    ngOnInit() { }

    add() {
      // this.modal
      //   .static(WareEditComponent, { i: { id: 0 } })
      //   .pipe(filter(w => w === true))
      //   .subscribe(() => this.st.reload());
    }

  radioChange(ret:any){
      console.log('radioChange',ret);
  }

  dataChange(data:SimpleTableData[]) {
    return data.map((i: SimpleTableData, index: number) => {
          i.disabled = index ===0;
          i.hidden = index ===1;
          return i;
    });
  }
}
