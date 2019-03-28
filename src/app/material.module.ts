import {  MatButtonModule, MatInputModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import {NgModule} from '@angular/core'
import {
 MatFormFieldModule,
 MatCheckboxModule,
 MatTableModule,
 MatTableDataSource}
from '@angular/material';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
 imports:[MatButtonModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,FormsModule,BrowserAnimationsModule,MatCardModule,MatTableModule,MatSidenavModule,MatToolbarModule,
  MatIconModule,MatTableModule],
 exports:[MatButtonModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,FormsModule,BrowserAnimationsModule,MatCardModule,MatTableModule,MatSidenavModule,MatToolbarModule,
    MatIconModule,MatTableModule]
})
export class MaterialModule{}


