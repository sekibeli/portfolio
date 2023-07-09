import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isMenuOpen = false;
@Input() bluePic = true;

constructor( public translate: TranslateService){
  this.translate.setDefaultLang('de');
}

toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}

ngOnInit(): void {}
}



