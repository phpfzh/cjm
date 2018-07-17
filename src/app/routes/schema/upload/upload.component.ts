import {Component, OnInit, ViewChild} from '@angular/core';
import {filter} from 'rxjs/operators';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {SimpleTableColumn, SimpleTableComponent} from '@delon/abc';
import {SFSchema} from '@delon/form';
import {NzMessageService, UploadFile} from "ng-zorro-antd";

@Component({
  selector: 'app-schema-upload',
  templateUrl: './upload.component.html',
})
export class SchemaUploadComponent {

  schema: SFSchema = {
    properties: {
      avatar: {
        type: 'string',
        title: '头像',
        enum: [
          {
            uid: -1,
            name: 'xxxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
           }
        ],
        ui: {
          widget: 'upload',
          action: 'http://localhost:8080/upload/upload?_allow_anonymous=true',
          resReName: 'resource_id',
          listType: 'picture-card',
          headers:(file: UploadFile) => {
            console.log('232',file);
            file._allow_anonymous = true;
            return file;
          }

        }
      },
      drag: {
        type: 'string',
        title: 'Drag',
        ui: {
          widget: 'upload',
          action: '.upload',
          resReName: 'resource_id',
          type: 'drag'
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
