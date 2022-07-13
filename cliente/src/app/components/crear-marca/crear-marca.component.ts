import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css'],
})
export class CrearMarcaComponent implements OnInit {
  marcaForm: FormGroup;
  titulo = 'Crear Marca';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.marcaForm = this.fb.group({
      nombre: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarMarca() {
    const PRODUCTO: any = {
      nombre: this.marcaForm.get('nombre')?.value,
    };

    if (this.id !== null) {
      this._productoService.editarMarca(this.id, PRODUCTO).subscribe((data) => {
        this.toastr.success('Marca modificada correctamente');
        this.router.navigate(['/listado-marcas']);
      });
    } else {
      this._productoService.guardarMarca(PRODUCTO).subscribe(
        (data) => {
          this.toastr.success(
            'La Marca fue agregada con exito',
            'Producto agregado'
          );
          this.router.navigate(['/listado-marcas']);
        },
        (error) => {
          console.log(error);
          this.marcaForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this._productoService.obtenerMarca(this.id).subscribe(
        (data) => {
					console.log(data)
          this.marcaForm.patchValue({
						nombre: data.data.nombre,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
