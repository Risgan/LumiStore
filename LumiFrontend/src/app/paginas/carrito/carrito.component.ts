import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ButtonModule, ToastModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss',
  providers: [MessageService]
})
export class CarritoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductCart()
  }

  cancelar(){
    this.router.navigate(['/inicio']);
  }

  comprar(){
    debugger
    console.log('Compra realizada');
    
    if (this.productos.length === 0) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No hay productos en el carrito' });
      
    }
    else{
      this.productoService.deleteAllProductCart();
      this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Compra Exitosa' });
  
      setTimeout(() => {
        this.router.navigate(['/inicio']);
      }, 3000);
    }
    
  }
}
