import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './welcome/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCT';
  opensidenav=false;
  @ViewChild('sidenav')
  onToggle(){
          
  }
}
