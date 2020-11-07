import { Component, Input, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/device';

@Component({
  selector: 'app-userlist2',
  templateUrl: './userlist2.component.html',
  styleUrls: ['./userlist2.component.css']
})
export class Userlist2Component implements OnInit {

  @Input() groupFilters2: Object;
  @Input() searchByKeyword2: string;
  devices: any[] = [];
  filterDevices: any[] = [];

  constructor(private userService: DevicesService,) { }
  ngOnInit(): void { this.loadDivices(); }
  ngOnChanges(): void {if (this.groupFilters2) { this.filterDevicesLists(this.groupFilters2); } }

  ////===================== ========================================= #1 //

  filterDevicesLists(filters2: any): void {
    this.filterDevices = this.devices; //Reset User List
    const keys = Object.keys(filters2);
    const filterUser = user => {
      console.log(keys)                         ////  11111111111111111111111111111111111111111111111
      let result = keys.map(key => {
        if (!~key.indexOf('age')) {
          if (user[key]) { return String(user[key]).toLowerCase().startsWith(String(filters2[key]).toLowerCase()) }
          else { return false; }
        }
      });
      // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      console.log(result)                         ///// 22222222222222222222222222222222222222222222
      result = result.filter(it => it !== undefined);
      // Filter the Age out from the other filters
      if (filters2['ageto'] && filters2['agefrom']) {
        if (user['age']) {
          if (+user['age'] >= +filters2['agefrom'] && +user['age'] <= +filters2['ageto']) {
            result.push(true);
          } else { result.push(false); }
        } else { result.push(false); }
      }
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
    }// end
    this.filterDevices = this.devices.filter(filterUser);
  }

  loadDivices(): void {
    this.userService.fetchDevices().subscribe(devices => this.devices = devices);
    this.filterDevices = this.filterDevices.length > 0 ? this.filterDevices : this.devices;
  }

}
