import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  'selector': 'app-character',
  'templateUrl': './character.component.html',
  'styleUrls': ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  userName: string;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  getCharacter(pcId: number) {
    this.characterService.getDnDBeyondCharacter(pcId)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }
}
