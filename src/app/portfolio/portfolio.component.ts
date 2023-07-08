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
    dev: 'Javascript | HTML | SCSS',
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
    title:  'Ring of Fire',
    dev: 'Angular | Firebase',
    description: 'Ring of Fire Beschreibung',
    img: 'ring',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/ringoffire',
    buttonShow:'Test it',
    testUrl: 'https://jg-ringoffire.web.app/'
  }
]


}


//'Hierbei handelt es sich um einen Taskmanager, der auf dem Prinzip des Kanban-Systems aufbaut. Du hast die Möglichkeit, deine Aufgaben ganz einfach mittels Drag-and-Drop zu organisieren, zu erstellen, zu bearbeiten und zu löschen. Zudem kannst du individuelle Kategorien einrichten und jeder Aufgabe gezielt Mitarbeiter zuweisen.',