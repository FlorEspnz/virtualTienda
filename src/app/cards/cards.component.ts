import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ProducsArray, Product } from '../interfaces/productos';
import { ProductsService } from '../servicios/productos.service';
import { ProductoDetallesComponent } from '../producto-detalles/producto-detalles.component';
import { UsersService } from '../servicios/usuario.servicio';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ProductoDetallesComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

closeModal() {
   this.individualProduct
}
@Input()list!: any;
individualProduct: any; 
productService= inject(ProductsService)

constructor(private user: UsersService){}


  getProduct(ev: number) {
   
  this.productService.getIndividualProduct(ev).subscribe((res: { results: any[]; })=>{
    this.individualProduct= res.results[0]
  
  }
  )
  
}

}
