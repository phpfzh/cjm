import { Component, OnInit, ViewChild } from '@angular/core';
 import {SimpleTableColumn, SimpleTableFilter} from '@delon/abc';
 import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-forums-table-data',
  templateUrl: './table-data.component.html',
})
export class ForumsTableDataComponent implements OnInit {
  optionList = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];

  selectedValue = { label: 'Jack', value: 'jack', age: 22 };

  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;

  user:any[] = [];
      columns:SimpleTableColumn[] = [
        {title:'编号',index:'id',type:'checkbox',selections:[
            {
              text:'小于25岁',
                select:(data:any[]) =>{
                    data.forEach(item => (item.checked = item.age < 25));
                }
            },
            {
              text:'大于25岁',
              select:(data:any[]) => {
                data.forEach(item => (item.checked = item.age > 25))
              }
            }
          ]
        },
        {
          title: '姓名',
          index: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
          filters:[
            {text:'name 1',value:'name 1'},
            {text:'name 2',value:'name 2'},
          ],
          filter:(filter:SimpleTableFilter,record:any) => record.name.indexOf(filter.value) === 0
        },
        {
          title:'年龄',
          index:'age',
          sorter:(a,b) => a.age - b.age,
          filters:[
            {text:'20岁以下',value:[0,20]},
            {text:'20-25岁',value:[20,25]},
            {text:'25岁以上',value:[25,100]}
          ],
          filter:(filter:SimpleTableFilter,record:any) =>
            record.age >= filter.value[0] && record.age <= filter.value[1]
        },
        {
          title:'状态',
          index:'status',
          type:'badge',
          badge:{
            1: { text: 'Success', color: 'success' },
            2: { text: 'Error', color: 'error' },
            3: { text: 'Processing', color: 'processing' },
            4: { text: 'Default', color: 'default' },
            5: { text: 'Warning', color: 'warning' },
          }
        }

      ];
     ngOnInit():void{
          of(
            Array(100)
              .fill({})
              .map((item :any,idx:number) => {
                 return {
                        id:idx+1,
                        name:`name ${idx +1 }`,
                        age:Math.ceil(Math.random() * 10)+20,
                        status:Math.floor(Math.random()*5) +1
                 };
              })
          )
            .pipe(delay(500))
            .subscribe(res => this.user = res);

     }

  checkboxChange(ret:any){
       console.log('checkboxChange'+JSON.stringify(ret));
     }

     sortChange(ret:any){
       console.log('sortChange'+JSON.stringify(ret));
     }
}
