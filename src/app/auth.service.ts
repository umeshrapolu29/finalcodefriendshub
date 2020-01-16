import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

    // register(registerdata){
    //   const headers=new HttpHeaders()

    //    return this.http.post<{sucess: boolean, msg: string, data: {}}>("http://localhost:4000/admin/adduser",registerdata,
    //    {headers:headers})
    // }
    Accesscontrol(accessdata){
      const headers=new HttpHeaders()
       return this.http.post<{sucess: boolean, msg: string, data: {}}>("http://localhost:4000/access/resumeorpausequeue",accessdata,
       {headers:headers})
    }
    register(registerdata){
      const headers=new HttpHeaders()
      console.log(registerdata);

       return this.http.post("http://localhost:3001/user/userregister",registerdata,
       {headers:headers})
    }
    login(logindata){
      const headers=new HttpHeaders()
      console.log(logindata);

       return this.http.post("http://localhost:3001/user/login",logindata,
       {headers:headers})
    }
    posting(postingdata){
      const headers=new HttpHeaders()
      console.log(postingdata);

       return this.http.post("http://localhost:3001/user/posting",postingdata,
       {headers:headers})
    }
    getdetails(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/getdetails",getdata,
       {headers:headers})
    }
    postlikes(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/countlikes",getdata,
       {headers:headers})
    }
    addfriend(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/postrequest",getdata,
       {headers:headers})
    }
    friendrequest(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/getrequest",getdata,
       {headers:headers})
    }
    requeststatus(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/getrequestaccepted",getdata,
       {headers:headers})
    }
    requestaccepted(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/requestaccepteddata",getdata,
       {headers:headers})
    }
    requestdeleted(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/getrequestdelete",getdata,
       {headers:headers})
    }
    friendsdetails(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/getpostdetails",getdata,
       {headers:headers})
    }
    requestacceptedfromdata(getdata){
      const headers=new HttpHeaders()

      return  this.http.post("http://localhost:3001/user/requestaccepetedfromdata",getdata,
      {headers:headers})
    }
    forgetpassword(getdata){
      const headers=new HttpHeaders()

      return this.http.post("http://localhost:3001/user/forgotpassword",getdata,
      {headers:headers})
    }
    resetpassword(getdata){
      const headers=new HttpHeaders()

      return this.http.post("http://localhost:3001/user/resetpassword",getdata,
      {headers:headers})
    }
    commentonpost(getdata){
      const headers=new HttpHeaders()

      return this.http.post("http://localhost:3001/user/retrivecommentonpost",getdata,
      {headers:headers})
    }
    commentonpostdata(getdata){
      const headers=new HttpHeaders()

      return this.http.post("http://localhost:3001/user/commentonpost",getdata,
      {headers:headers})
    }
    
    
  }
