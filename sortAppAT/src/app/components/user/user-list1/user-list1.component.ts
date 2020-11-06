import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DinnersService } from 'src/app/services/dinners.service';

@Component({
  selector: 'app-user-list1',
  templateUrl: './user-list1.component.html',
  styleUrls: ['./user-list1.component.css']
})
export class UserList1Component implements OnInit {
  @Input() groupFilters1: Object;
  @Input() searchByKeyword1: string;
  dinners: any[] = [];
  filterDiners: any[] = [];

  constructor(private userService: DinnersService,) { }
  ngOnInit(): void {
    this.loadUsers();   // this.loadUsers2(); 
    this.userService.getEstablishment().subscribe(data => { //TWO
    })
  }
  ngOnChanges(): void {
    if (this.groupFilters1) { this.filterUserList(this.groupFilters1); }
  }


  ////===================== ========================================= #1 //
  filterUserList3(filters: any): void {
    // this.filterDiners = this.establishment; //Reset User List
    const keys = Object.keys(filters);
    const filterUser = establishment => {
      console.log(keys)                         ////  11111111111111111111111111111111111111111111111
      let result = keys.map(key => {
        if (!~key.indexOf('age')) {
          if (establishment[key]) { return String(establishment[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase()) }
          else { return false; }
        }
      });
      // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      console.log(result)                         ///// 22222222222222222222222222222222222222222222
      result = result.filter(it => it !== undefined);
      // Filter the Age out from the other filters
      if (filters['ageto'] && filters['agefrom']) {
        if (establishment['age']) {
          if (+establishment['age'] >= +filters['agefrom'] && +establishment['age'] <= +filters['ageto']) {
            result.push(true);
          } else { result.push(false); }
        } else { result.push(false); }
      }
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
    }// end
    // this.filterDiners = this.establishment.filter(filterUser);
  }

  ////===================== ========================================= #1 //
  filterUserList(filters: any): void {
    this.filterDiners = this.dinners; //Reset User List
    const keys = Object.keys(filters);
    const filterUser = user => {
      console.log(keys)                         ////  11111111111111111111111111111111111111111111111
      let result = keys.map(key => {
        if (!~key.indexOf('age')) {
          if (user[key]) { return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase()) }
          else { return false; }
        }
      });
      // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      console.log(result)                         ///// 22222222222222222222222222222222222222222222
      result = result.filter(it => it !== undefined);
      // Filter the Age out from the other filters
      if (filters['ageto'] && filters['agefrom']) {
        if (user['age']) {
          if (+user['age'] >= +filters['agefrom'] && +user['age'] <= +filters['ageto']) {
            result.push(true);
          } else { result.push(false); }
        } else { result.push(false); }
      }
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
    }// end
    this.filterDiners = this.dinners.filter(filterUser);
  }

  loadUsers(): void {
    this.userService.fetchDiners().subscribe(dinners => this.dinners = dinners);
    this.filterDiners = this.filterDiners.length > 0 ? this.filterDiners : this.dinners;
  }

}
