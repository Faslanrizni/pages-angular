import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router) {

  }
  navigateToPage(link:string):void{
    this.router.navigateByUrl(link)
      .then(e=>{
        console.log(e);
      }).catch(error=>{
      console.log(error);
    })

  }
  title = 'app3';
}
