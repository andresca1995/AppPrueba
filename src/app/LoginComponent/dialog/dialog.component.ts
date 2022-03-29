import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public mesa:any,fb: FormBuilder) {
   }
   punto = new FormGroup({
    id: new FormControl({disabled: true}),
    nombre: new FormControl('',[Validators.required]),
    descripcion: new FormControl('',[Validators.required]),
    longitud: new FormControl('',[Validators.required]),
    latitud: new FormControl('',[Validators.required])
  })
  

  ngOnInit(): void {
    if(this.mesa){
      this.punto.setValue({
        id : this.mesa.id,
        nombre:this.mesa.nombre,
        descripcion:this.mesa.descripcion,
        longitud:this.mesa.longitud,
        latitud:this.mesa.latitud,
      })
    }
  }

  cerrar(): void {
    this.dialogref.close();
  }
}
