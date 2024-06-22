import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/productos';


@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.scss'
})
export class ProductoDetallesComponent implements OnInit {
 ngOnInit(): void {
   console.log(this.product)
 }
 @Input() product: Product | undefined
 @Output() close: EventEmitter<boolean>= new EventEmitter<boolean>();

closeButton(){
  this.close.emit(false)
}
}