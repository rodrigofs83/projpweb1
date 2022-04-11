import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UsuarioModule,
    ProdutoModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
