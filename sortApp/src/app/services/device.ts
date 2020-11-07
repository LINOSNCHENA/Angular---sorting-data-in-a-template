import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DEVICES } from '../model/device';
import { ADMINS } from '../model/admins';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  constructor( private httpBackService: HttpClient) { }

  // fetchUsers(): Observable<any> {
  //   return of(ADMINS);
  // }

  fetchAdmins(): Observable<any> {
    return of(ADMINS);
  }

  fetchDevices(): Observable<any> {
    return of(DEVICES);
  }

  // getEstablishment(): Observable<any> {
  //   return this.httpBackService.get('../../assets/monze.json');
  // }

  // getEvents(): Observable<any> {
  //   return this.httpBackService.get('../../assets/pemba.json');
  // }
}
