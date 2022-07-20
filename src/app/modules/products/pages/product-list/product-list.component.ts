import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'src/app/shared/interfaces/SelectItem';
import { Product } from '../../interfaces/product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  loading:boolean;
  sortOptions: SelectItem[];
  sortKey:string;
  sortField:string;
  sortOrder:number;

  constructor(
    private productListService: ProductListService
  ) { }

  ngOnInit(): void {
   this.loadProducts();
   this.sortOptions = [
    {label:'Najnowsze produkty',value:"new"},
    {label:'Najstarsze produkty',value:"old"},
    {label:'Najdroższe produkty',value:"expensive"}

   ]
  }

  loadProducts(){
    this.productListService.getProducts()
    .subscribe({
     next:(res:Product[])=>{
       this.loading = true;
        this.products = res;
     },
     complete:()=>this.loading = false
    });
  }

  onSortChange(ev:Event){
    console.log("wybór");
  }

}

