import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestuarantsComponent } from '../delete-restuarants/delete-restuarants.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  search = new BehaviorSubject("")
  //property
// dependancy injuction
  constructor(private api:HttpClient) { }
  //userdefined fumction
  //to get all resturent list 

  getRestuarantslist(){
    //use http request get -make api call -http://localhost:3000/restaurants
    //get() - httpclient class - HttpClientModule library
   return this.api.get('http://localhost:3000/restaurants')
  }
//2:get a perticular details of the resturant
viewResturant(restId:any){
  return this.api.get('http://localhost:3000/restaurants/'+restId)

}
//3:to add new resturant detail
addreturant(newrestuarant:any){
   return this.api.post('http://localhost:3000/restaurants',newrestuarant)

}
//4 to update perticular resturant
updatedResturant(restId:any,updatedRestbody:any){
  return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestbody)
}
//5:to delete perticular resturant
DeleteResturant(restId:any){
  return this.api.delete('http://localhost:3000/restaurants/'+restId)

}

}
