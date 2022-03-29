import { importExpr } from "@angular/compiler/src/output/output_ast";
import { NgModule} from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, } from '@angular/material/dialog'
import {MatTabsModule} from '@angular/material/tabs'
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({

imports:[
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatTabsModule,
      MatExpansionModule,
    ],
exports:[
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatTabsModule,
      MatExpansionModule,
        ]
})
export class materialModule{}