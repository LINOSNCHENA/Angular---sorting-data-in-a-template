import { Component, Input, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/admin';

@Component({
  selector: 'app-userlist1',
  templateUrl: './userlist1.component.html',
  styleUrls: ['./userlist1.component.css']
})
export class Userlist1Component implements OnInit {

  @Input() groupFilters1: Object;
  @Input() searchByKeyword1: string;
  devices: any[] = [];
  filterDevices: any[] = [];

  constructor(private userService: AdminsService,) { }
  ngOnInit(): void { this.loadDivices(); }
  ngOnChanges(): void {if (this.groupFilters1) { this.filterDevicesLists(this.groupFilters1); } }

  ////===================== ========================================= #1 //

  filterDevicesLists(filters1: any): void {
    this.filterDevices = this.devices; //Reset User List
    const keys = Object.keys(filters1);
    const filterUser = user => {
      console.log(keys)                         ////  11111111111111111111111111111111111111111111111
      let result = keys.map(key => {
        if (!~key.indexOf('age')) {
          if (user[key]) { return String(user[key]).toLowerCase().startsWith(String(filters1[key]).toLowerCase()) }
          else { return false; }
        }
      });
      // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      console.log(result)                         ///// 22222222222222222222222222222222222222222222
      result = result.filter(it => it !== undefined);
      // Filter the Age out from the other filters
      if (filters1['ageto'] && filters1['agefrom']) {
        if (user['age']) {
          if (+user['age'] >= +filters1['agefrom'] && +user['age'] <= +filters1['ageto']) {
            result.push(true);
          } else { result.push(false); }
        } else { result.push(false); }
      }
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
    }// end
    this.filterDevices = this.devices.filter(filterUser);
  }

  loadDivices(): void {
    this.userService.fetchAdmins().subscribe(devices => this.devices = devices);
    this.filterDevices = this.filterDevices.length > 0 ? this.filterDevices : this.devices;
  }

}
