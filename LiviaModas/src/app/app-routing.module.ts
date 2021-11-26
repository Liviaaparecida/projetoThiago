import { JaquetaComponent } from './componente/jaqueta/jaqueta.component';
import { CroppedComponent } from './componente/cropped/cropped.component';
import { AcessoriosComponent } from './componente/acessorios/acessorios.component';
import { CalcaComponent } from './componente/calca/calca.component';
import { BlusaComponent } from './componente/blusa/blusa.component';
import { BodyComponent } from './componente/body/body.component';
import { PlussizeComponent } from './componente/plussize/plussize.component';
import { ShortsComponent } from './componente/shorts/shorts.component';
import { VestidosComponent } from './componente/vestidos/vestidos.component';
import { CamisasComponent } from './componente/camisas/camisas.component';
import { InicioLojaComponent } from './inicio-loja/inicio-loja.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioLojaComponent },
  {path: 'T-shirt', component: CamisasComponent },
  {path: 'vestidos', component: VestidosComponent },
  {path: 'shorts', component: ShortsComponent },
  {path: 'plussize', component: PlussizeComponent },
  {path: 'body', component: BodyComponent },
  {path: 'blusa', component: BlusaComponent },
  {path: 'calca', component: CalcaComponent },
  {path: 'acessorios', component: AcessoriosComponent },
  {path: 'cropped', component: CroppedComponent },
  {path: 'Jaqueta', component: JaquetaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
