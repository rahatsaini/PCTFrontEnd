import { Component, OnInit, inject, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { ReactiveFormsModule } from '@angular/forms';

import { Route, Router } from '@angular/router';
import { PersonExternalService, UserCreds } from 'src/app/services/person-external-service';
import { AuthService } from 'src/app/services/authService';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  username: string;
  password: string;
  rememberMe: boolean;
  errorMessage: string;
  expiredDate:Date;


  person = new Array<any>();
  //globalContext: GlobalContext;


  constructor(private personExternalService: PersonExternalService, private router: Router, private auth: AuthService
    , private cookie: CookieService
  ) {
    this.auth = auth;
    this.router = router;
    this.personExternalService = personExternalService;
    //this.autorun = autorun;
     
    

  }

 


  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', { validators: [Validators.required] })
    });
   this.activate();
  }

  activate() {
    this.username = "";
    this.password = "";
    this.rememberMe = true;

    this.cookie.delete('SessionIdPCT');
    this.cookie.delete('UserIdPCT');
    this.cookie.delete('SessionIdPCT2');
    this.cookie.delete('UserIdPCT2');
}



  login() {
    console.log(this.loginform);
    UserCreds.username = this.loginform.value.username;
    UserCreds.pass = this.loginform.value.password;
    this.person = new Array<any>();
 
    this.personExternalService.checkLogin(this.loginform.value.username)
      .then((person) => {
           console.log(person);
        this.person = new Array<any>();
        if (person[0]) {
          let expirymins =  parseInt(person[2]);
          
          this.cookie.set('SessionIdPCT', person[1],expirymins,'','',false);
          this.cookie.set('UserIdPCT', this.username, expirymins,'','', false);
          this.cookie.set('UserIdPCT', this.username, expirymins, '', '',false);
          this.cookie.set('SessionIdPCT2', person[1], expirymins * 2, '', '', false);
           this.cookie.set('UserIdPCT2', this.username,expirymins * 2, '', '', false);
        }
        else {
          console.log("error with login");
        }
      })
      .catch((e: Error) => {
        //        this.router.navigateToRoute("search");
        this.errorMessage = "Username and password combination in invalid";
        //        this.isBusy = false;
        // TODO-JTN : Error handling
      });
    // this.personExternalService.checkLogin(this.loginform.value.username)
    // .subscribe(
    //   (data:Array<any>) => this.person = data ,
    //   (err:any)=> console.log(err),
    //   ()=> {console.log(`person is ` + this.person);

    //       if(this.person[0])
    //       {
    //         this.router.navigate(["/temp"]);
    //          //set cookies here
    //       }
    //       else {
    //         //redirect to login page
    //         console.log("error in log in");

    //       }
    //     }
    //   );




  }

}
