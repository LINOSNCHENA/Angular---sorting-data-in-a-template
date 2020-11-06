import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DinnersService } from 'src/app/services/dinners.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  levels = ["Beginner", "Expert", "Monze"];

  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  searchText: string = '';

  constructor(private fb: FormBuilder, private userService: DinnersService) { }

  ngOnInit(): void { this.buildForm(); }

  buildForm(): void {
    this.form = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      jobTitle: new FormControl(''),
      level: new FormControl(''),
      agefrom: new FormControl(''),
      ageto: new FormControl(''),

      // namex: new FormControl(''),
      // city: new FormControl(''),
      // postcode: new FormControl(''),
      // adress: new FormControl(''),
      // starton: new FormControl(''),
      // endon: new FormControl(''),


    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }
}
