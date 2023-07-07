import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  

  constructor(public router: Router, public translate: TranslateService){
    

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   
  };

  
}
