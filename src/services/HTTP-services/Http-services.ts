import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {environment} from '../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
    // token for authentication
  token = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    })
  }
  baseUrl = environment.baseUrl; //swagger url
  
  constructor(private http:HttpClient) { }

  post(url , data){
    return this.http.post(this.baseUrl+url,data);
  }

  get(url){
    console.log("token-->",this.token)
    return this.http.get(this.baseUrl+url,this.token);
  }
  /**
   * @param url API url
   */
  getWithoutToken(url){
    return this.http.get(this.baseUrl+url)
  }
   /**
   * @params url
   * @params data
   */
  postWithToken(url , data){
    return this.http.post(this.baseUrl+url,data,this.token);
  }

}