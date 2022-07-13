import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, Marca } from '../../models/producto';

import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  listMarcas: Marca[] = [];
  listTalla: any[] = ['M', 'L', 'XL', 'XXL'];
  titulo = 'Crear Producto';
  id: string | null;
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      descripcion: ['', Validators.required],
      talla: ['', Validators.required],
      observaciones: ['', Validators.required],
      marca: ['', Validators.required],
      cantidad_inventario: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getMarcas();
    this.esEditar();
  }

  getMarcas() {
    this._productoService.getMarcas().subscribe((data) => {
      this.listMarcas = data.data;
    });
  }

  agregarProducto() {
    const PRODUCTO: any = {
      descripcion: this.productoForm.get('descripcion')?.value,
      idMarca: Number(this.productoForm.get('marca')?.value),
      talla: this.productoForm.get('talla')?.value,
      observaciones: this.productoForm.get('observaciones')?.value,
      cantidad_inventario: this.productoForm.get('cantidad_inventario')?.value,
    };

    if (this.id !== null) {
      this._productoService
        .modificarProducto(this.id, PRODUCTO)
        .subscribe((data) => {
          this.toastr.success(
            'El Producto fue modificado con exito',
            'Producto Modificado'
          );
          this.router.navigate(['/']);
        });
    } else {
      this._productoService.guardarProducto(PRODUCTO).subscribe(
        (data) => {
          this.toastr.success(
            'El Producto fue agregado con exito',
            'Producto agregado'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this._productoService.obtenerProducto(this.id).subscribe(
        (data) => {
          this.productoForm.patchValue({
            descripcion: data.data.descripcion,
            talla: data.data.talla,
            observaciones: data.data.observaciones,
            marca: data.data.idMarca,
            cantidad_inventario: data.data.cantidad_inventario,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
