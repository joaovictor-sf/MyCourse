import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {


  private readonly API = 'api';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(form: any){
    const URL = `${this.API}/auth/login`
    console.log("imprimindo o url", this.API)

    return this.httpClient.post<any>(URL, form).pipe(take(1));
  }

  getCursos(){
    const URL = `${this.API}/course`
    return this.httpClient.get(URL).pipe(take(1));
  }

}
