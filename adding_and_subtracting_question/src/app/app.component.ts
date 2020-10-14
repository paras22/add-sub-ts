import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	num1: number = 22;
  num2: number = 12;

  result : number;

	//TODO 3: Create a number property by the name of 'result' and don't initialize it

	onClickAdd() {

    this.result = this.num1 + this.num2;
		//TODO 4: Write the logic to add two numbers and store the sum in the 'result' property
	}

	onClickSub() {
    this.result = this.num1 - this.num2;



		//TODO 5: Write the logic to subtract two numbers and store the difference in the 'result' property
	}
}
