import { Injectable, Inject } from "@angular/core";
import { HttpInterceptor,HttpClient, HttpRequest, HttpHandler, HttpEvent,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


import enviroments_ from 'src/enviroments_';

import { UserCreds } from './person-external-service';
import { CookieService } from 'ngx-cookie-service';
import {PersonService} from './person-service'

@Injectable()
export class AddheaderInterceptor implements HttpInterceptor {
    username: string;
    sPass : string;
    UserId: string;
    private cookieService: CookieService;
 //   private baseUrl = 'http://localhost:3000/';// enviroments_.externalApi.endpoint;
   @Inject(enviroments_.externalApi.endpoint) private baseUrl: string  ;
    // constructor(
        
    //     //private personservice : PersonService,
    //     //private baseUrl = enviroments_.externalApi.endpoint,
    //     @Inject(enviroments_.externalApi.endpoint) private baseUrl: string  
    //         ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
let URL = enviroments_.externalApi.endpoint + req.url;
        console.log(URL);

        const jsonreq: HttpRequest<any> = req.clone({
             url: URL,

            setHeaders: {
                "content-type": "application/json",
                "Accept": "application/json",
                "X-Requested-With": "Fetch",
                "Authorization":"Basic YmVubWVzc0BiaWdwb25kLmNvbTptb2dhbmE="



            },

        },
         );
        if (jsonreq.headers.has('Authorization')) { 
            jsonreq.headers.delete('Authorization');
        }
        // let sSessionId = this.cookieService.get('SessionIdPCT');

        // if(sSessionId != null)
        // {
        //     this.sPass = this.cookieService.get('SessionIdPCT');
        // }
        // else
        // {
        //     this.sPass = UserCreds.pass;
        // }
        // let sUserId = this.cookieService.get('UserIdPCT');
        // if( sUserId != null)
        // {
        //     //this.sUserId = sUserId;
        // }
        // else
        // {
        //     sUserId = UserCreds.username;
        // }
        
        jsonreq.headers.set('Authorization', 'Basic ' + 'YmVubWVzc0BiaWdwb25kLmNvbTp1bmRlZmluZWQ='); //+ environment.externalApi.credentials.tokennamebenmess@bigpond.com:mogana
        
     
         return next.handle(jsonreq);

    }
} 
