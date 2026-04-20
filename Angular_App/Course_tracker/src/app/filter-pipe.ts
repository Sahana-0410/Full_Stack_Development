import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true // This is crucial for your modern Angular setup
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      // Searches through both course name and category
      return it.name.toLowerCase().includes(searchText) || 
             it.category.toLowerCase().includes(searchText);
    });
  }

}
