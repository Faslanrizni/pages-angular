import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data:string | undefined;

  constructor(private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    /*this.data =
      this.activatedRoute.snapshot.paramMap.get('data')!;
    /!* ! mark is for ensure to code that data would be string or undefined *!/*/
     /* we are not using this mechanism when need real time update*/

      this.activatedRoute.paramMap.subscribe(response =>{
        this.data = response.get('data')!;
      });
  }

}
