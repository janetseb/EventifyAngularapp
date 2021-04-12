import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  apidata:any;

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://janeteventsapp.herokuapp.com/events")
    .subscribe((emngmt)=>{
      this.apidata = emngmt;
      console.log(this.apidata)
    })
  }

}
