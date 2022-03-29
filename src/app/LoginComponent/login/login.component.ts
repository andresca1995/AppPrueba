import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../Servicio/service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(fb: FormBuilder, public service: ServiceService) { }
 
  hide = true;
  mserror = true;
  loginform = new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
    
    document.body.classList.add("image")
  }

  login(){
    let datos={
      "data":{      
        nombre:this.loginform.get('usuario')?.value,
        pass:this.loginform.get('password')?.value
      }
    }
debugger

      this.service.sendpost("http://localhost:3001/api/login",datos,(response:any) => {
        console.log(response)
    if(response.user){

      localStorage.setItem("token", response.token);
      window.location.href = '/maps'
    }
  },(error:any) => {
    if (error.status === 404){
      this.mserror = false
      console.log("no hay datos")
    }
  })
    }
}


