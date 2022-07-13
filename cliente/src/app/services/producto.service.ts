import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

	url = "http://localhost:3000"

  constructor(private http: HttpClient) {}

	
	getProductos(): Observable<any> {
		 return this.http.get(`${this.url}/producto`)
	}
	
	eliminarProducto(id: number): Observable<any> {
		return this.http.delete(`${this.url}/producto/${id}`)
	}
	
	guardarProducto(producto: any): Observable<any> {
		return this.http.post(`${this.url}/producto`, producto)
	}
	
	obtenerProducto(id: any): Observable<any> {
		return this.http.get(`${this.url}/producto/${id}`)
	}
	
	modificarProducto(id: any, producto: any): Observable<any> {
		return this.http.put(`${this.url}/producto/${id}`, producto)
	}
	
		
	getMarcas(): Observable<any> {
		return this.http.get(`${this.url}/marca`)
	}
	
	guardarMarca(marca: any): Observable<any> {
		return this.http.post(`${this.url}/marca`, marca)
	}
	
	eliminarMarca(id: number): Observable<any> {
		return this.http.delete(`${this.url}/marca/${id}`)
	}
	
	obtenerMarca(id: any): Observable<any> {
		return this.http.get(`${this.url}/marca/${id}`)
	}
	

	editarMarca(id: any, marca: any): Observable<any> {
		return this.http.put(`${this.url}/marca/${id}`, marca)
	}
}
