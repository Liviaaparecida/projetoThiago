import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CamisasComponent } from './componente/camisas/camisas.component';
import { VestidosComponent } from './componente/vestidos/vestidos.component';
import { ShortsComponent } from './componente/shorts/shorts.component';
import { PlussizeComponent } from './componente/plussize/plussize.component';
import { BodyComponent } from './componente/body/body.component';
import { BlusaComponent } from './componente/blusa/blusa.component';
import { CalcaComponent } from './componente/calca/calca.component';
import { AcessoriosComponent } from './componente/acessorios/acessorios.component';
import { CroppedComponent } from './componente/cropped/cropped.component';
import { JaquetaComponent } from './componente/jaqueta/jaqueta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CamisasComponent,
    VestidosComponent,
    ShortsComponent,
    PlussizeComponent,
    BodyComponent,
    BlusaComponent,
    CalcaComponent,
    AcessoriosComponent,
    CroppedComponent,
    JaquetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
