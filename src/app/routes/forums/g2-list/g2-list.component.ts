import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-forums-g2-list',
  templateUrl: './g2-list.component.html',
})
export class ForumsG2ListComponent implements OnInit{
salesData: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 12; i += 1) {
      this.salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
      });
    }
  }
}
