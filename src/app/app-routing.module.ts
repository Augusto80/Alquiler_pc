import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {QuienesomosComponent} from './componentes/quienesomos/quienesomos.component';
import {ContactenosComponent} from './componentes/contactenos/contactenos.component';
import {CotizacionComponent} from './componentes/cotizacion/cotizacion.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {FooterComponent} from './componentes/footer/footer.component';



const routes: Routes = [

  {path: 'inicio', component:InicioComponent},
  {path: 'quienesomos', component:QuienesomosComponent},
  {path: 'contactenos', component:ContactenosComponent},
  {path: 'cotizacion', component:CotizacionComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'footer', component:FooterComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
