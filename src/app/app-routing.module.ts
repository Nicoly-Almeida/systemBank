import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  {
  path: 'cliente',
  children: [
    {
      path: 'novo',
      component: CadastroClienteComponent
    },
  ]
},
{
  path: '',
  component: CadastroClienteComponent,
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
