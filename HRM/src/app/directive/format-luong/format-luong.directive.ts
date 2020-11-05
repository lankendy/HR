import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formatluong]'
})
export class FormatLuongDirective {

  constructor(private control: NgControl) { }

  @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
      const inputElement = event.target as HTMLInputElement;
      if (event.code == "Backspace") {
        this.fixBackSpace(inputElement.value);
      }
      else {
        this.formatLuong(inputElement.value);
      }
    }


  
  fixBackSpace(input: string) {
    input = input.slice(0, input.length - 1);
  }

  formatLuong(input: string) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ',') {
        input = input.replace(",", "");
      }
    }
    let size = input.length;
    if (size < 4) {
      input = input;
    }
    switch(size) {
      case 4: 
        input = input.substring(0, 1) + "," + input.substring(1);
        break;
      case 5:
        input = input.substring(0, 2) + "," + input.substring(2);
        break;
      case 6: 
        input = input.substring(0, 3) + "," + input.substring(3);
        break;
      case 7:
        input = input.substring(0, 1) + "," + input.substring(1, 4) + "," + input.substring(4);
        break;
      case 8: 
        input = input.substring(0, 2) + "," + input.substring(2, 5) + "," + input.substring(5);
        break;
      case 9:
        input = input.substring(0, 3) + "," + input.substring(3, 6) + "," + input.substring(6);
        break;
    }
    this.control.control.setValue(input);
  }
}
