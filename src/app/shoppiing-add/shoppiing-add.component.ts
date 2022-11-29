import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppiing-add',
  templateUrl: './shoppiing-add.component.html',
  styleUrls: ['./shoppiing-add.component.css']
})
export class ShoppiingAddComponent {
  title=""
  price=""
  description=""
  category=""
  image=""
  rate=""
  count=""

  addProduct =()=>{
    let data: any=
    {"title":this.title,"price":this.price,"description":this.description,"category":this.category,"image":this.image,"rating":{"rate":this.rate,"count":this.count}}
    console.log(data)
  }

}
