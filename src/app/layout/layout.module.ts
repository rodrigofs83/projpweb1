import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { NemuComponent } from './nemu/nemu.component';




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
]
})
export class LayoutModule {};