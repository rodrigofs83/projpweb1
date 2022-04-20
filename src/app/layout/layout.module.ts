import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from "@angular/router";
import { NemuComponent } from './nemu/nemu.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 



@NgModule({
declarations:[
    NemuComponent
],
exports:[
    NemuComponent
],
imports:[
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule
]
})
export class LayoutModule {};