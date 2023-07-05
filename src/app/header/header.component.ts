import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isMenuOpen = false;
@Input() bluePic = true;


toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}

ngOnInit(): void {}
 

}
