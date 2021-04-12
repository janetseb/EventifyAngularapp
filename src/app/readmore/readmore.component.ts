import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {
  apidata:any;

  constructor(private route:ActivatedRoute,public http:HttpClient) { }
  onClickDelete()
  {
   this.route.paramMap.subscribe(params=>{

     let id = params.get('id');
     this.http.get(`https://janeteventsapp.herokuapp.com/events/delete/${id}`)
    .subscribe((emngmt)=>{
      this.apidata = emngmt;
      console.log(this.apidata)
    })
      console.log(id);
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{

      let id = params.get('id');
      this.http.get(`https://janeteventsapp.herokuapp.com/admin/${id}`)
     .subscribe((emngmt)=>{
       this.apidata = emngmt;
       console.log(this.apidata)
     })
       console.log(id);
     })
  }

}
