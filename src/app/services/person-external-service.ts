
import { PersonService } from './person-service';
import { HttpClient,HttpHeaders,HttpRequest,HttpResponse,HttpInterceptor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { FetchError } from '../errors';
import { reject } from 'q';
import { observable, Observable, Subject} from 'rxjs';

@Injectable()
export class PersonExternalService{
  
  sPass : string;
  UserId: string;
  personservice:PersonService;
  personSubject = new Subject();
  constructor(private http :HttpClient){
       //this.http = new HttpClient;
       //this.personservice = new PersonService();
      // httpHeaders = new   
      

  }


  getPiiNote = (id): Promise<any> => {
    return this.http.get(`api/Mockup/Notes/${id}`)
    .toPromise() 
    .then(response => response)
    .catch(err=>{
      return Promise.resolve(this.errorPersonObject);
    })
   
  }

  getPiiPerson = (id) : Promise<any> => {
    return this.http.get(`api/Mockup/Notes/${id}`)
    .toPromise()
    .then(response=>response)
    .catch(err => { return Promise.reject(new FetchError("Unable to search for persons with criteria set", err)); });

  }


  searchForPerson= (claimsNo:string, DOB:string, surname:string, firstName:string):Promise<any>=>{
    return this.http.get(`api/Mockup/Search/${claimsNo}/${DOB}/${surname}/${firstName}`)
    .toPromise()
    .then(response=>response)
    .catch(err=> {return reject(new FetchError("Unable to search for persons with criteria set", err)) ; })
  }

  _searchForPeson(claimsNo:string, DOB:string, surname:string, firstName:string):Observable<any> {
    return this.http.get(`api/Mockup/Search/${claimsNo}/${DOB}/${surname}/${firstName}`);
  }


  checkLogin =(username:string) : Promise<any> =>{
    return this.http.get(`api/Mockup/LoginCheck/${username}`)
     .toPromise()
     .then(response=>response)
     .catch(err =>{return reject(new FetchError("Unable to verify login for user : "+ username,err)); } )
  }


    //  checkLogin(username :string) : Observable<any>{
    //     return this.http.get(`api/Mockup/LoginCheck/${username}`);
    //  }





errorNoteObject = {
  content1: "Not Found.",
  content2: "Not Found.",
  content3: "Not Found."
}

errorPersonObject = {
  workTelephone: "Not Found.",
  homeTelephone: "Not Found.",
  mobileTelephone: "Not Found."
}
}
export class UserCreds{
  static username = "";
  static pass = "";

  // SetUserCreds(user : string, pass : string)
  // {
  //   UserCreds.username = user;
  //   UserCreds.pass = pass;
  // }

  // GetTokenValue()
  // {
  //   return btoa(UserCreds.username + ':' + UserCreds.pass);
  // };
}
