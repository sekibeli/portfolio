import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
work:any = {
  title:  '',
  dev: '',
  description: '',
  img: '',
  buttonGit:'Github',
  gitUrl: '',
  buttonShow:'Test it',
  testUrl: ''
}

allWork = [
  {
    title:  'Join',
    dev: 'Angular | Typescript | Javascript | HTML | SCSS',
    description: 'bla bla bla bla',
    img: 'join1',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://gruppe-5008.developerakademie.net/index.html'
  },
  {
    title:  'La Mama Loca',
    dev: 'Angular | Typescript | Javascript | HTML | SCSS',
    description: 'bla bla bla bla',
    img: 'join1',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://gruppe-5008.developerakademie.net/index.html'
  },
  {
    title:  'Ring of Fire',
    dev: 'Angular | Typescript | Javascript | HTML | SCSS',
    description: 'bla bla bla bla',
    img: 'join1',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://gruppe-5008.developerakademie.net/index.html'
  }
]


}
