import { Injectable } from '@angular/core';
import {_HttpClient} from "@delon/theme";
import {Observable} from "rxjs/Rx";
import {ApiService} from "@core/service/api.service";

/**
 * 用户登录service
 */
@Injectable()
export class UserLoginService {

  constructor(
    private httpClient: _HttpClient,
    private apiservice:ApiService
              ) { }

   login(username:string,password:string):Observable<any>{
      return this.httpClient.post<any>(this.apiservice.login,null,{"username":username,"password":password});
   }
}
