import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-forums-table-form',
  templateUrl: './table-form.component.html',
})
export class ForumsTableFormComponent implements OnInit {

    params: any = {
      "_allow_anonymous":true,
     };
    total = 100;
    url = `https://randomuser.me/api/?results=3`;
    searchSchema: SFSchema = {
      properties: {
          id: {
                     type:'string',
                    title:'标号'
             },
          id2: {
             type:'string',
            title:'标号'
           }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id.value', default: '-' },
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

}
