import { Injectable } from '@angular/core';
import {_HttpClient} from "@delon/theme";
import {Observable} from "rxjs/Rx";
import {ApiService} from "@core/service/api.service";
/**
 * 用户注册
 */
@Injectable()
export class RegisterService {
   constructor(private httpclient:_HttpClient,
              private api:ApiService) {
    }

  //获取用户名
  generateUserName():Observable<any>{
        return   this.httpclient.post<any>(this.api.generateUserName,null,{"_allow_anonymous":true});
  }

 //发送注册手机短信验证码
  ssmRegCode(mobile:string):Observable<any>{
     return  this.httpclient.post<any>(this.api.ssmRegCode,null,{"_allow_anonymous":true,"mobile":mobile});
  }

  //注册
  register(mobile:string,password:string,code:string,username:string,email?:string):Observable<any>{
     return this.httpclient.post<any>(this.api.register,null,{"_allow_anonymous":true,"mobile":mobile,"password":password,"code":code,"username":username,"email":email});
  }

}
