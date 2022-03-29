import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  sendpost(url:string, data:any, fnok:Function,fnerror:Function){

    this.http.post(url,data).subscribe(response=>{
      return fnok(response);
    },err=>{
      fnerror(err);
    })
  }
  sendposttoken(url:string, data:any, fnok:Function,fnerror:Function){
    let config = {
      headers: {
        'Authorization':"bearer " +String(localStorage.getItem("token")),
        "content-type": "application/json"
      }
    };
    this.http.post(url,data,config).subscribe(response=>{
      return fnok(response);
    })
  }

}
