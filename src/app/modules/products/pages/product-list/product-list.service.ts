import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor(
    private http:HttpClient
  ) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiPath+"GetProducts");
  }

  addProduct(obj:Product):void{

  }
}
