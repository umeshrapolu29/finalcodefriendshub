import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private _httpclient:HttpClient,private auth:AuthService,private _router:Router){ }
  logindata={
    fmail:''
  }

  ngOnInit() {
  }
  
  sendmail(){
    const payload = new FormData();
    console.log(this.logindata)
    localStorage.setItem('fmail',this.logindata.fmail)
    console.log(this.logindata.fmail)

    this.auth.forgetpassword(this.logindata).subscribe(res=>{
      console.log(res)
      this._router.navigate(['/resetpassword'])

   

    })
  }

}
