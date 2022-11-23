import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarantlist: any[],filterString:string,propName:any): any[] {
    const result:any=[]
    if(!restuarantlist || filterString=='' || propName==''){
      return restuarantlist
    }
       restuarantlist.forEach((resturant:any)=>{
        if(resturant[propName].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
          result.push(resturant)
          console.log(result);
          
        }
       })
       return result
  }

}
