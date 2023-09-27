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
    dev: 'Javascript | HTML | CSS',
    description: 'Join Beschreibung',
    img: 'join',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://julia-georgiew.developerakademie.net/joinsingle/index.html'
  },
  {
    title:  'La Mama Loca',
    dev: 'Javascript | HTML | CSS',
    description: 'La Mama Loca Beschreibung',
    img: 'lamamaloca',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/LaMamaLoca',
    buttonShow:'Test it',
    testUrl: 'https://julia-georgiew.developerakademie.net/lamamaloca/index.html'
  },
  {
    title:  'DABubble',
    dev: 'Angular | Typescript | SCSS | Firebase',
    description: 'Dabubble Beschreibung',
    img: 'dabubble',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/dabubble',
    buttonShow:'Test it',
    testUrl: 'https://my-dabubble.web.app/'
  }
]
}