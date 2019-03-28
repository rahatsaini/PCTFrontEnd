import {MatPaginator, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {of} from 'rxjs';


export class LanguageDataSource extends DataSource<any> {

  constructor(private persons) {
    super();
  }

  connect(): Observable<any> {
    return of(this.persons);
  }

  disconnect() {
    // No-op
  }

}