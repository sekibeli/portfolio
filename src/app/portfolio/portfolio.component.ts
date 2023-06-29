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
    description: 'Hierbei handelt es sich um einen Taskmanager, der auf dem Prinzip des Kanban-Systems aufbaut. Du hast die Möglichkeit, deine Aufgaben ganz einfach mittels Drag-and-Drop zu organisieren, zu erstellen, zu bearbeiten und zu löschen. Zudem kannst du individuelle Kategorien einrichten und jeder Aufgabe gezielt Mitarbeiter zuweisen.',
    img: 'join',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://gruppe-5008.developerakademie.net/index.html'
  },
  {
    title:  'La Mama Loca',
    dev: 'Javascript | HTML | CSS',
    description: 'Ein klassisches Lauf-, spring- und wirf-Spiel, mit objekt-orientiertem Ansatz. Mama ist verrückt und legt sich mit Spinnen und Moskitos an. Hilf ihr den Endboss zu besiegen!',
    img: 'lamamaloca',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://gruppe-5008.developerakademie.net/index.html'
  },
  {
    title:  'Ring of Fire',
    dev: 'Angular | Firebase',
    description: 'Völlig sinnloses Trink-Kartenspiel, aber sehr hilfreich, um einige Grundprinzipien von Angular und Firebase zu erlernen. Im Multiplayer-Style darf sich jeder betrinken.',
    img: 'ring',
    buttonGit:'Github',
    gitUrl: 'https://github.com/sekibeli/join',
    buttonShow:'Test it',
    testUrl: 'https://gruppe-5008.developerakademie.net/index.html'
  }
]


}
