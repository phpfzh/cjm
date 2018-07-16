import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import {CascaderWidget, SFSchema} from '@delon/form';
import {of} from "rxjs";
import {CascaderOption} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-cascader',
  templateUrl: './cascader.component.html',
})
export class SchemaCascaderComponent {


  schema:SFSchema = {
      properties: {
        static: {
          type: 'number',
          title: 'Static',
          enum: [
            {
              value: 110000, label: '北京', parent: 0, children: [
                {
                  value: 110100, label: '北京市', parent: 110000, children: [
                    {value: 110101, label: '东城区', parent: 110100, isLeaf: true},
                    {value: 110105, label: '朝阳区', parent: 110100, isLeaf: true}
                  ]
                }
              ]
            }
          ],
          ui: 'cascader',
          default: [110000, 110100, 110105]
        },
        async: {
          type: 'number',
          title: 'Async',
          ui: {
            widget: 'cascader',
            asyncData: () => of([{
              value: 110000, label: '北京', parent: 0, children: [
                {
                  value: 110100, label: '北京市', parent: 110000, children: [
                    {value: 110101, label: '东城区', parent: 110100, isLeaf: true},
                    {value: 110105, label: '朝阳区', parent: 110100, isLeaf: true}
                  ]
                }
              ]
            }]),
            default: [110000, 110100, 110105]
          }
        },
        real_time: {
          type: 'number',
          title: 'RealTime',
          ui: {
            widget: 'cascader',
            loadData: (node: CascaderOption, index: number, me: CascaderWidget) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  (node as any).children = [
                    { value: 110000, label: '北京', parent: 0 },
                    { value: 110100, label: '北京市', parent: 110000 },
                    { value: 110101, label: '东城区', parent: 110100 },
                    { value: 110105, label: '朝阳区', parent: 110100 },
                    { value: 310000, label: '上海', parent: 0 },
                    { value: 310100, label: '上海市', parent: 310000 },
                    { value: 310101, label: '黄浦区', parent: 310100 },
                    { value: 310104, label: '徐汇区', parent: 310100 }
                  ]
                    .filter((w: any) => {
                      w.isLeaf = index === 1;
                      return w.parent === (node.value || 0);
                    });
                  resolve();
                  me.detectChanges();
                }, 100);
              });
            }
          },
          default: [110000, 110100, 110105]
        }
      }
  }

  submit(val:any){
    console.log(val)
  }

}
