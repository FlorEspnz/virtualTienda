import { Component, OnInit, inject } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DolarService } from '../servicios/dolar.servicio';
import { DolarInterface } from '../interfaces/dolar.interfaces';
import { CommonModule } from '@angular/common';
import { UsersService } from '../servicios/usuario.servicio';
import { Users } from '../interfaces/usuario.interface';
import { ProductsService } from '../servicios/productos.service';
import { ProducsArray, Product } from '../interfaces/productos';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CardsComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  data!: Product[];
  loader:boolean =false
  products= inject(ProductsService)
  filteredData!: Product[]| null;
  searchData:string ='';
  constructor(private dolarService: DolarService, 
    private users: UsersService){
    
  }
  
  ngOnInit(): void {
    this.getAllProducts()
   }

  getAllProducts(){
    this.products.getProducts().subscribe((res:ProducsArray)=>{
    this.data = res.results

    })
  }

  getFileteredPruducts(){
    this.filteredData = this.data.filter((product: Product)=>{
      
      return product.nombre_producto.includes(this.searchData)

    })
  }
}