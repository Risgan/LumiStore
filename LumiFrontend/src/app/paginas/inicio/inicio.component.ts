import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonModule, CarouselModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'] // Cambié 'styleUrl' a 'styleUrls'
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

  constructor(
    private readonly productoService: ProductoService,
    private readonly router: Router
  ) { }
  

  ngOnInit() {
    this.loadData();

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

  agregarCarrito(producto: Producto) {
    console.log('Agregando al carrito:', producto);


  }

  goCarrito(){
    this.router.navigate(['/carrito']);
  }
}
