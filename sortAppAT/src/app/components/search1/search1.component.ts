import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

  form: FormGroup;
  levels = ["Green", "Yellow", "Red"];
  @Output() groupFilters1: EventEmitter<any> = new EventEmitter<any>();
  searchText1: string = '';

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { this.buildForm(); }

  buildForm(): void {
    this.form = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      jobTitle: new FormControl(''),
      level: new FormControl(''),
      agefrom: new FormControl(''),
      ageto: new FormControl(''),
    });
  }

  search1(filters1: any): void {
    Object.keys(filters1).forEach(key => filters1[key] === '' ? delete filters1[key] : key);
    this.groupFilters1.emit(filters1);
  }

}
