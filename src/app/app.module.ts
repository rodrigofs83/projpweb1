import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/model/usuario/login/login.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
