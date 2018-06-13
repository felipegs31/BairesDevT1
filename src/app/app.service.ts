import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  getPhotoListings() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos', {
    })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // Treat the error
  handleError(error: any) {
    return Observable.throw(error);
  }

}
