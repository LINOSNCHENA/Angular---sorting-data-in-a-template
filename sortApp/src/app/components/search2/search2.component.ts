import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {
  form: FormGroup;
  levels = ["Green", "Yellow", "Red"];
  @Output() groupFilters2: EventEmitter<any> = new EventEmitter<any>();
  searchText2: string = '';

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
  search2(filters2: any): void {
    Object.keys(filters2).forEach(key => filters2[key] === '' ? delete filters2[key] : key);
    this.groupFilters2.emit(filters2);
  }

}
