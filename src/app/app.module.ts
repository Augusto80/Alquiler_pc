import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { QuienesomosComponent } from './componentes/quienesomos/quienesomos.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CotizacionComponent } from './componentes/cotizacion/cotizacion.component';

import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    QuienesomosComponent,
    ContactenosComponent,
    FooterComponent,
    RegistroComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
