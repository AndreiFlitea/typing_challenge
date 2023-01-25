import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input() childText ='';
  @Input() input ='';

  color(letter: string, inputLetter: string): string{
      
    if(!inputLetter)
      return 'black';
    else if (letter !== inputLetter){
      letter = 'x';
      return 'red';
    }  
    else 
      return 'green';    
  }

}
