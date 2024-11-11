import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonModule, CarouselModule, BadgeModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InicioComponent implements OnInit, AfterViewInit {

  banner: any[] = [
    { image: '/Images/Banner/oferta.jpg' },
    { image: '/Images/Banner/frutas.jpg' },
    { image: '/Images/Banner/verduras.jpg' },
    { image: '/Images/Banner/granos.jpg' }
  ];

  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 }
  ];

  productos: Producto[] = []; 
  selectedProduct: Producto[] = this.productoService.getProductCart();

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router
  ) { }
  

  ngOnInit() {
    // setTimeout(() => {
      
      this.loadData();
    // }, 6000);

  }

  ngAfterViewInit() { }

  loadData() {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        console.log(productos);
        this.productos = productos;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    });
  }

  async agregarCarrito(producto: Producto) {

    await this.productoService.setProductCart(producto)
    await this.productoService.getProductCart();

  }

  goCarrito(){
    // this.productoService.
    // this.productoService.getProductos().subscribe( (productos: any) => {
    //   console.log(productos, productos.length);
    // });
    this.router.navigate(['/carrito']);
  }

  
}
