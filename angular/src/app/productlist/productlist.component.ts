import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  allProducts;
  ngOnInit() {
    this.getAll();
  }
  ngOnchanges(){
    this.getAll();
  }
  getAll(){
    let obs = this._httpService.getAllProduct();
    obs.subscribe(data=>{
      console.log("get all products",data);
      this.allProducts=data;
    })
  }
  delete(id){
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data=>{
      console.log("Delete data success", data);
      this.reload();
    })
  }
  reload(){
    this.getAll();
  }

}
