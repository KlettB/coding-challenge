import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(items: any[] | null, field: string): any[] {
    if (!items) {
      return [];
    }

    if (field) {
      items.sort((a, b) => a[field] > b[field] ? 1 : -1);
    } else {
      /* istanbul ignore next */
      items.sort((a, b) => a > b ? 1 : -1);
    }

    return items;
  }

}
