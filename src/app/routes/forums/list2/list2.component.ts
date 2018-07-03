import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-forums-list2',
  templateUrl: './list2.component.html',
})
export class ForumsList2Component implements OnInit {

    params: any = {
      a:1,
      b:2,
      "_allow_anonymous":true
      };
    url = `https://randomuser.me/api/?results=3`;
    total = 100;
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
      { title: '编号', index: 'id.no' },
      { title: '邮箱', index: 'email' },
      { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
      { title: '电话', index: 'phone' },
      {
        title: '注册时间',
        type:'date',
        index:"registered"
      }
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
