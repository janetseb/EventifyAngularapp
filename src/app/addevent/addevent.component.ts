import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  selectedFile: File;
  resultUrl:string;
  
  event = {
     title:'' ,
     date: '',
     description:'' ,
     image :''
    }

    onFileSelected(event:any){
      this.selectedFile = <File>event.target.files[0];
      console.log(this.selectedFile);
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this._http.post<any>("https://janeteventsapp.herokuapp.com/admin/upload",fd)
    .subscribe((data)=>{
      (
      this.resultUrl=data["url"],
      this.event.image = this.resultUrl,
      console.log(this.resultUrl)
        )
    })

    }


  constructor(private _router: Router,private _http:HttpClient) 
  {
   }




  ngOnInit(): void {
  }


  addEvent(){
    console.log(this.event);
    this._http.post<any>("https://janeteventsapp.herokuapp.com/admin/add",this.event)
    .subscribe((data)=>{
      (console.log(data))
    })
    this._router.navigateByUrl('/events')
  }

  
}



  

