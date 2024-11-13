import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonModule,InputNumberModule,InputTextModule, InputTextareaModule, FormsModule, CarouselModule, BadgeModule, FileUploadModule, DialogModule, CommonModule],
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
  displayDialog: boolean = false;
  nuevoProducto: Producto = { titulo: '', precio: 0, descripcion: '', imagenes: [] };
  displayUserDialog: boolean = false;
  usuario: any = {
    nombreUsuario: '',
    correo: '',
    contrasena: ''
  };

  userDialogHeader: string = 'Agregar Usuario';

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

  goCarrito() {
    // this.productoService.
    // this.productoService.getProductos().subscribe( (productos: any) => {
    //   console.log(productos, productos.length);
    // });
    this.router.navigate(['/carrito']);
  }

  agregarNuevoProducto() {
    this.displayDialog = true;
  }

  onUpload(event: any) {
    debugger
    console.log(event);
    const file = event.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Image = e.target.result;
      this.nuevoProducto.imagenes.push(base64Image);
    };
    reader.readAsDataURL(file);
  }

  guardarProducto() {
    console.log(this.nuevoProducto);
    
    this.productoService.createProducto(this.nuevoProducto).subscribe({
      next: (producto) => {
        console.log(producto);
        this.loadData();
      },
      error: (error) => {
        console.error('Error al guardar producto:', error);
      }
    });
    this.displayDialog = false;
    this.nuevoProducto = { titulo: '', precio: 0, descripcion: '', imagenes: [] };
  }

  eliminarProducto(producto: Producto) {
    this.productoService.deleteProducto(producto.id).subscribe({
      next: () => {
        console.log('Producto eliminado');
        this.loadData();
      },
      error: (error) => {
        console.error('Error al eliminar producto:', error);
      }
    });
  }

  showUserDialog() {
    this.displayUserDialog = true;
  }

  guardarUsuario() {
    console.log(this.usuario);

    this.usuario.contraseña = this.usuario.contrasena;
    delete this.usuario.contrasena;
    this.productoService.crearUsuario(this.usuario).subscribe({
      next: (usuario) => {
        console.log('Usuario guardado:', usuario);
        // Aquí puedes agregar lógica adicional después de guardar el usuario
      },
      error: (error) => {
        console.error('Error al guardar usuario:', error);
      }
    });
    this.displayUserDialog = false;
  }
}
