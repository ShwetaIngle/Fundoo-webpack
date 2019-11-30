import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP-services/Http-services';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    constructor(private httpService: HttpService) { }

   /**
    * @description this service will provide basic or advance service information of user
    */
   userService(){
    const url = '/user/service'; 
    return this.httpService.getWithoutToken(url);
  }

  /**
    * @param productId of user
    * @description this is add to cart service method 
    */
   addToCart(productId){
    const url = '/productcarts/addToCart';
    return this.httpService.post(url, productId);
  }

  /**
   * register service 
   * @params data from register .ts 
   **/
  onRegister(data) {
    const url = 'user/userSignUp';   // register url
    console.log('userservice', data)
    return this.httpService.post('user/userSignUp', data);
  }
}