import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { USERS } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { DEVICES } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class DinnersService {
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  constructor( private httpBackService: HttpClient) { }

  fetchUsers(): Observable<any> {
    return of(USERS);
  }

  fetchDiners(): Observable<any> {
    return of(DEVICES);
  }

  getEstablishment(): Observable<any> {
    return this.httpBackService.get('../../assets/monze.json');
  }

  getEvents(): Observable<any> {
    return this.httpBackService.get('../../assets/pemba.json');
  }
}
