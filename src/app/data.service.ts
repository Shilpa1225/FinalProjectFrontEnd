import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='http://localhost:8080/web';


  constructor(private http:HttpClient) { }
  
  getdetails():Observable<any>
  {
    return this.http.get(this.url.concat("/match"))
  }

  delete(id:number):Observable<any>
  {
    return this.http.get(this.url.concat("/match/Delete/")+id+"");
  }
  getMatches():Observable<any>
  {
    return this.http.get(this.url.concat("/match"))
  }
}
