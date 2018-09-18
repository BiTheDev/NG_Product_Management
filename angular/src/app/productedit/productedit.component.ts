import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  productid;
  currentProduct;
  errors;
  updateProduct = {title :"", price:0,url:""};
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.productid = params.id;
    });
    this.getProduct();
  }
  getProduct(){
    let obs=this._httpService.getProduct(this.productid);
    obs.subscribe(data=>{
      console.log("get product success");
      this.currentProduct = data;
      console.log(this.currentProduct); 
      this.updateProduct = {title : this.currentProduct['title'], price : this.currentProduct['price'], url : this.currentProduct['url']}
      
    })
  }
  update(){
    console.log(this.productid);
    let obs = this._httpService.editProduct(this.productid,this.updateProduct);
    obs.subscribe(data=>{
      if(data['errors']){
        console.log(data['errors']);
        this.errors = data['errors']['title']['message'];
        console.log(this.errors); 
        this.updateProduct = {title :"", price:0,url:""};
      }else{
        console.log("update success",data);
        this.updateProduct = {title : "", price : 0, url :""};
        this.goProductList();
      }
    })
    console.log("back to product list");
  }
  goProductList(){
    this._router.navigate(['/product']);
  }

}
