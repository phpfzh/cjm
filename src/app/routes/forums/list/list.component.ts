import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forums-list',
  templateUrl: './list.component.html',
})
export class ForumsListComponent implements OnInit {

    params: any = {};
    url = `/user`;
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
      { title: '编号',render: 'custom',width: '120px',className:'text-center'},
      { title: '调用次数', type: 'number', index: 'callNo',className:'text-center' },
      { title: '头像', type: 'img', width: '50px', index: 'avatar',className:'text-center' },
      { title: '时间', type: 'date', index: 'updatedAt' ,className:'text-center'},
      {
        title: '',
        buttons: [
          // { text: '查看', click: (item: any) => `/form/${item.id}` },
          // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(
              private http: _HttpClient,
                private modal: ModalHelper,
              private router:Router) {

    }

    ngOnInit() {


    }

    getUrl():void{
      console.log(this.router.url);
    }

    add() {
      // this.modal
      //   .static(WareEditComponent, { i: { id: 0 } })
      //   .pipe(filter(w => w === true))
      //   .subscribe(() => this.st.reload());
    }

}
