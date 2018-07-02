import {Component, OnInit} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html'
})
export class UserRegisterResultComponent implements OnInit{
  email : string;
  username:string;
  constructor(public msg: NzMessageService,private  router:ActivatedRoute) {

  }

   ngOnInit():void{
    this.router.queryParams.subscribe(
        params => {
          this.email = params["email"];
          this.username = params["username"];
        }
    );
  }
}
