import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(input: number): any {
    let result = input.toString();
    for (let i = 0; i < result.length; i++) {
      if (result[i] == ',') {
        result = result.replace(",", "");
      }
    }
    let size = result.length;
    if (size < 4) {
      result = result;
    }
    switch(size) {
      case 4: 
      result = result.substring(0, 1) + "," + result.substring(1);
        break;
      case 5:
        result = result.substring(0, 2) + "," + result.substring(2);
        break;
      case 6: 
      result = result.substring(0, 3) + "," + result.substring(3);
        break;
      case 7:
        result = result.substring(0, 1) + "," + result.substring(1, 4) + "," + result.substring(4);
        break;
      case 8: 
        result = result.substring(0, 2) + "," + result.substring(2, 5) + "," + result.substring(5);
        break;
      case 9:
        result = result.substring(0, 3) + "," + result.substring(3, 6) + "," + result.substring(6);
        break;
    }
    return result;
  }

}
