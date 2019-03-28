import { Component, OnInit, ViewChild,ElementRef, Output } from '@angular/core';
import { PersonExternalService } from '../services/person-external-service';
import * as moment  from 'moment';
import { EventEmitter } from 'events';
import { SearchTableComponent } from './search-table/search-table.component';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  isBusy: boolean
  persons = new Array<any>();
  selectedPerson: any;
  searchClaimNo:string;
  resultsTable: any;
  searchDOB = "";
  searchSurname = "";
  searchFirstname = "";
  constructor(private personexternalservice :PersonExternalService,private person:SearchTableComponent ) { }
  @Output() searchClick = new EventEmitter();
  ngOnInit() {
  }
  clearSearchCriteria()
  {
    
    this.searchDOB = '';
    this.searchSurname = '';
    this.searchFirstname = '';
    
  }


   getPersons(){
      
     this.person.getPersons(this.searchClaimNo,this.searchDOB,this.searchFirstname,this.searchSurname);
    }
    personsChanged() {
      (<any>jQuery(this.resultsTable)).bootstrapTable("load", this.persons);
  
      this.selectedPerson = null;
  
      this.HandleChanges();
    }

    attached() {
      jQuery(this.resultsTable).bootstrapTable({
        columns: [
           {
           field: 'id',
           title: 'Person ID'
         },
        // {
        //   field: 'minerCode',
        //   title: 'Miner Code'
        // }, 
        {
          field: 'fullName',
          title: 'Name'
        }, 
        {
          field: 'claim',
          title: 'Claim Number'
        },
        {
          field: 'formattedDateOfBirth',
          title: 'Date of Birth'
        }],
        data: this.persons,
        onClickRow: (e, row, $element) => {
          this.selectedPerson = e;
        }
      });
    }
  
    HandleChanges(){

    }
 
  clearClaimText()
  {
    
  }

  clearDOBText()
  {
    this.searchDOB = '';
  }

  clearSurnameText()
  {
    this.searchSurname = '';
  }

  clearFirstnameText()
  {
    this.searchFirstname = '';
  }


}
