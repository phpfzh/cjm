import { Injectable } from '@angular/core';
import {DelonAuthConfig} from "@delon/auth";

@Injectable()
export class ApiService {
    basePath = "http://admin.chenjiaming.com";
   //登录地址
   login = this.basePath + "/api/login";
   //注册地址
   register = this.basePath + "/api/register";
   //生成用户名
  generateUserName = this.basePath + "/api/generateUserName";
  //发送注册手机号短信验证码
  ssmRegCode = this.basePath+"/api/ssmRegCode";
  }
