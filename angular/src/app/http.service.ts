import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProduct(){
    return this._http.get("/products/");
  }
  createProduct(product){
    return this._http.post("/products/new", product)
  }
  editProduct(id,product)
  {
    return this._http.put("/products/edit/" + id, product)
  }
  deleteProduct(id)
  {
    return this._http.delete("/products/delete/" + id)
  }
  getProduct(id)
  {
    return this._http.get("products/" + id)
  }

}
