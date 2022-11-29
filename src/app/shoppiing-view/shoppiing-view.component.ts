import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shoppiing-view',
  templateUrl: './shoppiing-view.component.html',
  styleUrls: ['./shoppiing-view.component.css']
})
export class ShoppiingViewComponent {
    data :any =[]

    constructor(private api:ApiService){

      api.fetchProduct().subscribe(

        (readValue)=>{
          this.data=readValue
        }
      )


    }
}
