import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarMarcasComponent } from './components/listar-marcas/listar-marcas.component';
import { CrearMarcaComponent } from './components/crear-marca/crear-marca.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'crear-marca', component: CrearMarcaComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'editar-marca/:id', component: CrearMarcaComponent },
  { path: 'listado-marcas', component: ListarMarcasComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
