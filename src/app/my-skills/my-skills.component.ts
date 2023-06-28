import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
skillImages = ['angular.svg','ts.svg','js.svg','html.svg','scrum.svg','fb.svg','git.svg','css.svg','api.svg','material.svg'];
skillText = ['Angular','Typescript','Javascript','HTML','Scrum','Firebase','Git','CSS','Rest-Api','MaterialDesign'];
}
