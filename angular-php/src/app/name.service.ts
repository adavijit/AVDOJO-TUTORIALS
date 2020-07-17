import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http:HttpClient) { }

  onSendService(formData: FormData):Observable<any>{
    console.log(formData);
    
    return this.http.post<any>('http://localhost:8080/angular.php',formData)
  }

}
