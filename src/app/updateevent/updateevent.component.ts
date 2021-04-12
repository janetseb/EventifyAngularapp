import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {

  selectedFile: File;
  resultUrl:string;
  
  event = {
     title:'' ,
     data: '',
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
  constructor(private route:ActivatedRoute,private _http:HttpClient) { }

  ngOnInit(): void {
  }


  updateEvent(){
    this.route.paramMap.subscribe(params=>{
      let id = params.get('id');
      console.log(id);
      console.log(this.event);
      this._http.post<any>(`https://janeteventsapp.herokuapp.com/admin/update/${id}`,this.event)
      .subscribe((data)=>{
        (console.log(data))
      })
    })
   
  }

}



