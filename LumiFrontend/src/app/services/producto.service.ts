import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://lumistore-production.up.railway.app/api/productos'
  // private apiUrl = 'http://localhost:3000/api/productos'

  listCart: Producto[] = [];

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProductoById(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  createProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  updateProducto(id: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  deleteProducto(id: string|undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setProductCart(producto: Producto): void {
    this.listCart.push(producto);
  }

  getProductCart(): Producto[] {
    return this.listCart;
  }

  deleteProductCart(id: string): void {
    this.listCart = this.listCart.filter(producto => producto.id !== id);
  }

  deleteAllProductCart(): void {
    this.listCart = [];
  }

  crearUsuario(usuario:any){
    return this.http.post('https://lumistore-production.up.railway.app/api/usuarios', usuario);
  }

}
