import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-game';
  enteredText = ""
  randomText = faker.lorem.sentence();

  onInput(value: string){

    this.enteredText = value
    
  }

  compare(randomLetter:string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    if(enteredLetter === randomLetter){
      return 'correct';
    }else{
      return 'incorrect'
    }

  }
}
