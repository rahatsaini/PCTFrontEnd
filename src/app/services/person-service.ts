import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';
import {} from './person-external-service';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserCreds } from './person-external-service';
@Injectable()
export class PersonService{
    http:HttpClient;
    username:string;
    sPass:string;
    UserId:string;
    private redirect : Router;

    constructor(private cookie :CookieService){
        //this.redirect.navigate(["/login"]);
         

      }


      getUserToker=()=>{
          return this.username; 
      }
      getPerson=()=>{

      }

      getUserId (){
        let sUserId = this.cookie.get('UserIdPCT');
    
        if( sUserId != null)
        {
          return sUserId;
        }
        else
        {
          return UserCreds.username;
        }
      }
    }






