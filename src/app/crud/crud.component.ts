import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  apidata:any;

  constructor(private route:ActivatedRoute,public http:HttpClient) { }
  onClickDelete(id:string)
   {
    console.log(id)

   
      this.http.get(`https://janeteventsapp.herokuapp.com/admin/delete/${id}`)
     .subscribe((emngmt)=>{
       this.apidata = emngmt;
       console.log(this.apidata)
     })


   }

  ngOnInit(): void {
    this.http.get(`https://janeteventsapp.herokuapp.com/events`)
    .subscribe((emngmt)=>{
      this.apidata = emngmt;
      console.log(this.apidata)
    })
     
    
     
  }

}
