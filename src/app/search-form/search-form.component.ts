import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchUserr:string
  @Output() searchPerson = new EventEmitter<any>();
  
  searchUser(){
    this.searchPerson.emit(this.searchUserr)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
