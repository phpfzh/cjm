import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import {RegisterService} from "@core/service/register.service";
 @Component({
  selector: 'passport-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers:[RegisterService]
})
export class UserRegisterComponent implements OnDestroy ,OnInit{
  form: FormGroup;
  error = '';
  type = 0;
  loading = false;
  visible = false;
  status = 'pool';
  progress = 0;
  passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    pool: 'exception',
  };

  constructor(
    fb: FormBuilder,
    private router: Router,
    public msg: NzMessageService,
    private register:RegisterService
  ) {
    this.form = fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          UserRegisterComponent.checkPassword.bind(this),
        ],
      ],
      confirm: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          UserRegisterComponent.passwordEquar,
        ],
      ],
      mobilePrefix: ['+86'],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: [null, [Validators.required]],
    });
  }

  ngOnInit():void{
      this.register.generateUserName().subscribe(rep =>{
           if(rep.meta.code == "88"){
             this.form.patchValue({
               username:rep.data.username
              // mobilePrefix: ['+86']
             });
           }
      });
  }

  static checkPassword(control: FormControl) {
    if (!control) return null;
    const self: any = this;
    self.visible = !!control.value;
    if (control.value && control.value.length > 9) self.status = 'ok';
    else if (control.value && control.value.length > 5) self.status = 'pass';
    else self.status = 'pool';

    if (self.visible)
      self.progress =
        control.value.length * 10 > 100 ? 100 : control.value.length * 10;
  }

  static passwordEquar(control: FormControl) {
    if (!control || !control.parent) return null;
    if (control.value !== control.parent.get('password').value) {
      return { equar: true };
    }
    return null;
  }

  // region: fields

  get email(){
    return this.form.controls.email;
  }

  get username() {
    return this.form.controls.username;
  }
  get password() {
    return this.form.controls.password ;
  }
  get confirm() {
    return this.form.controls.confirm;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get captcha() {
    return this.form.controls.captcha;
  }
   // endregion

  // region: get captcha

  count = 0;
  interval$: any;

  getCaptcha() {

    var mobile = this.form.get("mobile").value;
    if(!mobile){
      this.msg.error("请输入手机号");
      return ;
    }

    if(this.form.get("mobile").invalid){
      this.msg.error("请输入正确的手机号");
      return ;
    }

    this.register.ssmRegCode(mobile).subscribe(rep =>{
         if(rep.meta.code == "88"){
           this.msg.success(rep.meta.message);
           this.count = 59;
           this.interval$ = setInterval(() => {
             this.count -= 1;
             if (this.count <= 0) clearInterval(this.interval$);
           }, 1000);
         }else{
           this.msg.error(rep.meta.message || "短信发送失败");
         }
    });
  }

  // endregion

  submit() {
    this.error = '';
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.invalid) return;
    let mobile = this.form.controls["mobile"].value;
    let password = this.form.controls["password"].value;
    let code = this.form.controls["captcha"].value;
    let username = this.form.controls["username"].value;
    let email = this.form.controls["email"].value;
    if(!email){
      email = "";
    }
    this.loading = true;
    this.register.register(mobile,password,code,username,email).subscribe(rep => {
          this.loading = false;
          if(rep.meta.code == "00"){
              this.msg.error(rep.meta.message || "注册失败");
              return;
          }
          setTimeout(() => {
             this.router.navigate(['/passport/register-result',],{queryParams:{"username":username,"email":email}});
          }, 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.interval$) clearInterval(this.interval$);
  }
}
