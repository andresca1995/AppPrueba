import { Component, OnInit,Inject } from '@angular/core';
import * as atlas from 'azure-maps-control';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {ServiceService} from '../../Servicio/service.service'
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
//, 
  public  listpuntos:any 
  constructor(public dialog: MatDialog,public service: ServiceService) { }

  ngOnInit(): void {
    document.body.classList.add("image")
    this.service.sendposttoken("http://localhost:3001/api/puntos/listar",null,(response:any) => {
      console.log(response.puntos[0]);
  this.listpuntos = response.puntos[0];
  this.cargarmapa();
  },(err:any) => {})
  } 

cargarmapa(){

  var map = new atlas.Map('myMap', {
    language:'Es-es',
    center: new atlas.data.Position(-73.35660148876742,5.541565295044706),
    zoom:18,
    authOptions: {
      authType: atlas.AuthenticationType.subscriptionKey,
      subscriptionKey: 'e4hguc9c6QmrFwwXozceYt0pdyJFk3hbT85kLfbfKmQ',
    }
  });
  
  map.controls.add([
    new atlas.control.ZoomControl,
  ],{
    position:atlas.ControlPosition.TopRight
  })
  this.listpuntos.forEach((e:any)=>{
    map.events.add("ready",function(){

      var marker = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: String(e.id),
        position: [e.longitud, e.latitud],
        popup: new atlas.Popup({
          content: '<p style="padding:12px">'+e.nombre+'</p>',
          pixelOffset: [0, -30]
        })
      })
    
      map.markers.add(marker);
      map.events.add('click',marker, () => {
        marker.togglePopup();
      });
      var datasource = new atlas.source.DataSource()
      map.sources.add(datasource)

      var layer = new atlas.layer.SymbolLayer(datasource);
      map.layers.add(layer)
    })  
  })
}
open(){
  const dialogo = this.dialog.open(DialogComponent,{});
  dialogo.afterClosed().subscribe((res) =>{
    console.log(res);
  } )
}

editar(a:any){
  const dialogo = this.dialog.open(DialogComponent,{data:a});
  dialogo.afterClosed().subscribe((res) =>{
    this.listpuntos.forEach((punto:any) =>{
      
      if(punto.id == res.id){
        let datos={
          "data":{      
            nombre:res.nombre,
            descripcion:res.descripcion,
            latitud:res.latitud,
            longitud:res.longitud,
            id:res.id,
            opcion:2,
          }
        }
        this.service.sendposttoken("http://localhost:3001/api/puntos/crud",datos,(response:any) => {
          this.listpuntos = response.puntos[0];
        },(Error:any) => {
          console.log(Error)
        })
      }
    });
    this.cargarmapa();
    console.log(res);
  } )
}

nuevo(){
  const dialogo = this.dialog.open(DialogComponent,{});
  dialogo.afterClosed().subscribe((res) =>{
    console.log(res);
    let datos={
      "data":{      
        nombre:res.nombre,
        descripcion:res.descripcion,
        latitud:res.latitud,
        longitud:res.longitud,
        id:0,
        opcion:1,
      }
    }
    this.service.sendposttoken("http://localhost:3001/api/puntos/crud",datos,(response:any) => {
      this.listpuntos = response.puntos[0];
      this.cargarmapa();
    },(Error:any) => {
      console.log(Error)
    })
  
    })

}
}
