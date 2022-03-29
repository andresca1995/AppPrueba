import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './LoginComponent/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { materialModule } from './material';
import { MapsComponent } from './LoginComponent/maps/maps.component';
import {AzureMapsModule} from 'ng-azure-maps';
import { DialogComponent } from './LoginComponent/dialog/dialog.component';
import { UserGuardGuard } from './user-guard.guard';

/*import * as atlas from 'azure-maps-control'*/

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'maps', component: MapsComponent , canActivate:[UserGuardGuard]},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapsComponent,
    DialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    materialModule,
    ReactiveFormsModule,
    AzureMapsModule.forRoot({authOptions:{
      subscriptionKey:'e4hguc9c6QmrFwwXozceYt0pdyJFk3hbT85kLfbfKmQ',
    }
  })
  ],
  exports: [ RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
