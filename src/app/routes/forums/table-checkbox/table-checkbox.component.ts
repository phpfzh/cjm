import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent, SimpleTableData} from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-forums-table-checkbox',
  templateUrl: './table-checkbox.component.html',
})
export class ForumsTableCheckboxComponent implements OnInit {

    params: any = {
      a:1,
      b:20,
      "_allow_anonymous":true
    };
    total=100;
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
    columns: SimpleTableColumn[] = [
      {title:'序号',index:'wangdaibusno'},
      {title:'编号',index:'id.value',type:'checkbox'},
      {title:'头像',index:'picture.thumbnail',width:'50px',type:'img'},
      {title:'邮箱',index:'email'},
      {title:'电话',index:'phone'},
      {title:'注册时间',index:'registered',type:'date'}
    ];

    checkboxChange(list:any[]){
      console.log('checkboxChange',list);
    }

    ngOnInit() { }

    add() {
      // this.modal
      //   .static(WareEditComponent, { i: { id: 0 } })
      //   .pipe(filter(w => w === true))
      //   .subscribe(() => this.st.reload());
    }

    dataChange(data:SimpleTableData[]){
      return data.map((i:SimpleTableData,index:number) => {
            console.log('dd',i);
            i.wangdaibusno = index +1;
            i.disabled = index === 0;
            return i;
      });
    }
}
