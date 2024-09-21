import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bike } from '../shared/models/Bike';
import { UPLOAD_CREATE_URL } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  static getNewOrderForCurrentUser1() {
    throw new Error('Method not implemented.');
  }
  private cartSubject: BehaviorSubject<" "> = new BehaviorSubject(" ");
  constructor(private http: HttpClient) { }
  
  getCartObservable(): Observable<" "> {
    return this.cartSubject.asObservable();
  }

  uploadBikeFromCurrentUser(order: any):Observable<any>{
    console.log("order request sent", order)
    return this.http.post(UPLOAD_CREATE_URL, order);
  }
}
