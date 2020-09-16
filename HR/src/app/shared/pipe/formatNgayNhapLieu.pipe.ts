import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNgayNhapLieu'
})
export class FormatNgayNhapLieuPipe implements PipeTransform {

  transform(value: string): any {
    // for (let i = 0; i < value.length; i++) {

    //   if ( i == 4 || i == 6 || i == 8) {
    //     result = result + " " + value[i];
    //   }
    //   else if (i == 10 || i == 12) {
    //     result = result + ":" + value[i];
    //   } else {
    //     result = result + value[i];
    //   }
    // }
    // return (new Date(result).toUTCString());
    return value.substring(6, 8) + '/' + value.substring(4, 6) + '/' + value.substring(0, 4) + ' ' + value.substring(8, 10) + ':' + value.substring(10, 12) + ':' + value.substring(12, 14);
  }

}
