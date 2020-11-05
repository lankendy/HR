import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formatphone]'
})
export class FormatPhoneDirective {

  constructor(private control: NgControl) { }

  @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
      const inputElement = event.target as HTMLInputElement;
      if(event.code == "Backspace") {
        this.fixBackSpace(inputElement.value);
      }
      else {
        this.formatPhoneNumber(inputElement.value);
      }
    }
  
  formatPhoneNumber(input: string) {
    let size = input.length;
    input = input.replace(/\ /g, '');
    if (size < 4) {
      input = input;
    }
    else if (size <=7) {
      input = input.substring(0,4) + " " + input.substring(4);
    }
    else if (size <=10){
      input =  input.substring(0, 4) + " " + input.substring(4, 7) + " " + input.substring(7);
    }
    else {
      input = input.substring(0, 4) + " " + input.substring(4, 7) + " " + input.substring(7, 10);
    }
    this.control.control.setValue(input);
  }

  fixBackSpace(input: string) {
    input = input.slice(0, input.length - 1);
  }

}
