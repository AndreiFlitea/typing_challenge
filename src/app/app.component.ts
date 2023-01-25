import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentText = '...';
  input ='';
  success = 'Success!';
  
  generateRandom() {
    this.input = '';
    const letters = '1234567 890qwer tyuio plkjhgfdsa zxcvbnm ';
    const wordLength = Math.floor(Math.random() * 20);

    let word ='';

    for(let i = 0; i <= wordLength; i++) {
      const index = Math.floor(Math.random() * letters.length);
      word += letters[index];      
    }
    this.parentText = word;
    
  }
}
