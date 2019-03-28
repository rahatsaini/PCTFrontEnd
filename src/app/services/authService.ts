import {Router} from '@angular/router'
import { Injectable } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';


declare var auth0;

@Injectable()
export class AuthService {

  connected = false;
  //   // TODO-JTN : Need CS config
  // auth0 = new auth0.WebAuth({
  //   // domain: 'jeanssw.au.auth0.com',
  //   // clientID: 'kpL2Q9QXFRd4Sp2Fvw4mYNScvgdv0g33',
  //   // redirectUri: 'http://localhost:9000/callback',
  //   // audience: 'https://jeanssw.au.auth0.com/userinfo',
  //   // responseType: 'token id_token',
  //   // scope: 'openid'
  // });

  
  constructor(private router: Router) {
    
  }

  public login(){
     auth0.authorize();
     
  }

  handleAuthentication() {
    // this.auth0.parseHash((err, authResult) => {
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     this.setSession(authResult);
    //     this.connected = true;
    //     this.router.navigate('');
    //   } else if (err) {
    //     console.log(err);
    //   }
    // });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(["temp"]);
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }


}