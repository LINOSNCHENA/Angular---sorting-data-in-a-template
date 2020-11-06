import { Component, Input, OnInit } from '@angular/core';
import { DinnersService } from 'src/app/services/dinners.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;

  users: any[] = [];
  filteredUsers: any[] = [];

  establishment: any[] = [];
  filteredEstablishment: any = [];

  events: any[] = [];
  filteredEvets: any = [];

  events2: any[] = [];
  establishment2: any[] = [];

  constructor(private userService: DinnersService, private httpfrontService: DinnersService) { }

  ngOnInit(): void {
    this.loadUsers();   // this.loadUsers2(); 
    this.httpfrontService.getEstablishment().subscribe(data => { //TWO
      this.establishment = data; this.establishment2 = [
        this.establishment[1].dates.startdate.slice(this.establishment[1].dates.startdate.length - 4)];
      console.log(this.establishment2);
    })                          //TWO                 

    this.httpfrontService.getEvents().subscribe(data => {        //THREE
      this.events = data; this.events2 = [
        this.events[1].dates.singles[1].slice(this.events[1].dates.singles[1].length - 4)];
      console.log(this.events2);
    })                                 //THREE
  }
  ngOnChanges(): void {
    if (this.groupFilters) { this.filterUserList(this.groupFilters); }
  }


  ////===================== ========================================= #1 //
  filterUserList3(filters: any): void {
    this.filteredUsers = this.establishment; //Reset User List
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
    this.filteredUsers = this.establishment.filter(filterUser);
  }

  ////===================== ========================================= #1 //
  filterUserList(filters: any): void {
    this.filteredUsers = this.users; //Reset User List
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
    this.filteredUsers = this.users.filter(filterUser);
  }
  ////===================== ========================================= #3 //

  loadUsers(): void {
    this.userService.fetchUsers().subscribe(users => this.users = users);
    this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;

    this.httpfrontService.getEstablishment().subscribe(establishment => this.establishment = establishment);
    this.filteredEstablishment = this.filteredEstablishment.length > 0 ? this.filteredEstablishment : this.establishment;
  }
  // ============================= ===================================#3 ///
}

