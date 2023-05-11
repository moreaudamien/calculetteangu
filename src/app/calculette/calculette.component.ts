import { Component } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent {




number1: number =0;
number2: number =0;
result: number =0;

add(){
  return this.result = this.number1 + this.number2;
}
sub(){
  return this.result = this.number1 - this.number2;
}
mul(){
  return this.result= this.number1 * this.number2;
}
div(){
  return this.result = this.number1 / this.number2;
}

generateNumber1(){
  this.number1 = this.generateNumber();
}
generateNumber2(){
  this.number2 = this.generateNumber();
}



generateNumber(){

return Math.floor(Math.random()*100); //math.floor pour arrondir le nombre //random pour generer un nombre aleatoire

}

}
