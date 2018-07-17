import {Component, OnInit, ViewChild} from '@angular/core';
import {filter} from 'rxjs/operators';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent} from '@delon/abc';
import {SFSchema} from '@delon/form';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-rate',
  templateUrl: './rate.component.html',
})
export class SchemaRateComponent {

  schema: SFSchema = {
    properties: {
      rate: {
        type: 'number',
        title: '评级',
        default: 4.5,
        ui: {
          widget: 'rate'
        }
      },
      rate2: {
        type: 'number',
        title: '评级',
        maximum: 500,
        multipleOf: 0.5,
        default: 4.5,
        ui: {
          widget: 'rate',
          text: '{{value}} starts'
        }
      }
    }
  }


  constructor(private mz: NzMessageService) {
  }

  submit(val: any) {
    this.mz.success(JSON.stringify(val));
  }
}
