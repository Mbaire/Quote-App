import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  transform(value: any): any {
    if (value > 0 && value < 60) {
      return 'Created a few second ago';
    } else if (value >= 60 && value < 3600) {
      return 'greated' + Math.round(value / 60) + 'minute ago';
    } else if (value >= 3600) {
      return 'CReated ' + Math.round(value / 3600) + 'hours ago';
    }
  }
}
