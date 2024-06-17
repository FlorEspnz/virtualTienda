import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ProducsArray, Product } from '../interfaces/productos';
import { ProductsService } from '../servicios/productos.service';
import { ProductoDetallesComponent } from '../producto-detalles/producto-detalles.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ProductoDetallesComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
closeModal() {
   this.individualProduct
}
@Input()list!: any;
individualProduct: any; 
productService= inject(ProductsService)

constructor(private user: UsersService){}


getProduct(ev : number){
  this.servicios.getIndividualProduct(ev).subscribe(res=>{
    this.individualProduct= res.results[0]

  }
  )
  
}

}
