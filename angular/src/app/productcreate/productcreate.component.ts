import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  errors;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  newProduct = {title : "", price : 0, url : ""};
  ngOnInit() {
  }
  Create(){
    let obs = this._httpService.createProduct(this.newProduct)
    obs.subscribe(data =>{
      if(data['errors']){
        console.log(data['errors']);
        this.errors = data['errors']['title']['message'];
        console.log(this.errors); 
        this.newProduct = {title : "", price : 0, url : ""};      
      }
      else{
        console.log("create product success", data);
        this.newProduct = {title : "", price : 0, url : ""};      
        this.goProductList();
      }
    })
  }
  goProductList(){
    this._router.navigate(['/product']);
  }
}
