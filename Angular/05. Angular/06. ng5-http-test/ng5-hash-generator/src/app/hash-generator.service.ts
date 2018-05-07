import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class HashGeneratorService {
  
  constructor(
    private http: HttpClient
  ) {
    // ..
  }

  getHash(str: string, mode: string) {
    
    // `http://localhost:8080/?text=${encodeURIComponent(str)}&mode=${encodeURIComponent(mode)}`,
    return this.http.get(
      `http://localhost:8080/`,
      {
        responseType : 'text',
        params : new HttpParams()
          .set('text', str)
          .set('mode', mode)
      }
    ).toPromise()
  }

}
