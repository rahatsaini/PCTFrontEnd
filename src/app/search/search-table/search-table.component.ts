import { Component, OnInit, Input, ChangeDetectorRef, ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTab } from '@angular/material';
import { PersonExternalService } from 'src/app/services/person-external-service';
import * as moment from 'moment';
import { DataSource } from '@angular/cdk/table';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { Observable,from } from 'rxjs';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpClient } from '@angular/common/http'
import { of ,Subject} from "rxjs";

import { MatTable } from '@angular/material';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { LanguageDataSource } from './searchtable-datasource';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})

export class SearchTableComponent implements OnInit {
  @ViewChild('myTable') myTable: MatTable<any>;
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns = ['claim', 'firstName', 'dateOfBirth'];
  isBusy: boolean
  _persons : person[] =[];
  personObservalbe$ = new Subject<person[]>();
  dataSource = new MatTableDataSource();
  constructor(private personexternalservice: PersonExternalService) {


  }

  ngOnInit() {
    this.getPersons('','','','');//to load first 100 rows 
 
    this.personObservalbe$.subscribe((result:person[])=>{
      console.log(result);
      this.dataSource.data = result;
   
    });

  }





  getPersons(searchClaim, Dob, lName, fName) {

    let searchClaimNo = searchClaim;
    let searchDOB = Dob;
    let searchSurname = lName;
    let searchFirstname = fName;
    var sDOB = "";
    //need to add moment
    // if(searchDOB != '')
    // {
    //    var aDate = moment(searchDOB, 'DD/MM/YYYY', true);
    //    var isValid = aDate.isValid();
    //    if(!isValid)
    //    {
    //      alert('Please supply a valid date in DD/MM/YYYY format');
    //      return;
    //    }
    //    sDOB = aDate.format("YYYYMMDD");

    // }
    this.isBusy = true;

    if (searchClaimNo == '')
      searchClaimNo = "empty";
  
    if (sDOB == '')
      sDOB = "empty";

    if (searchSurname == '')
      searchSurname = "empty";

    if (searchFirstname == '')
      searchFirstname = "empty";
      this.personexternalservice._searchForPeson(searchClaimNo, sDOB, searchSurname, searchFirstname).subscribe(  

     ( person$  => {
       
        this._persons = person$;         
        this.personObservalbe$.next(person$);
        console.log( person$);
        
       
      }

    )
    );

  }

  refresh() {
    // for future updates
    
  }


}




// end of the class

export class person {
  coalServicesId: string;
  firstName: string;
  lastName: string;
  pctId: string;
  claim: string;
  dateOfBirth: string;

}
