import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../models/producto';

@Component({
  selector: 'app-listar-marcas',
  templateUrl: './listar-marcas.component.html',
  styleUrls: ['./listar-marcas.component.css']
})
export class ListarMarcasComponent implements OnInit {

	listMarcas: Marca[] = []
  constructor(private _productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit(): void {
		this.obtenerMarcas()
  }
	
	obtenerMarcas() {
		this._productoService.getMarcas().subscribe(
			(data) => {
				this.listMarcas = data.data
			}, error => {
				console.log(error);
			}
		)
	}
	
	eliminarMarca(id: any) {
		this._productoService.eliminarMarca(id).subscribe(
			(data) => {
				this.toastr.error('La Marca fue eliminada con exito', 'Marca eliminada');
				this.obtenerMarcas()
			}, error => {
				console.log(error);
			}
		)
	}

}
