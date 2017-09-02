import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocumentsService {

  constructor(private http: Http) { }

  async search(term: string): Promise<any[]> {
    try {

      const params = new URLSearchParams();
      params.set('title__icontains', term);

      const url = `${environment.api}/documents/?${params.toString()}`;
      const response = await this.http.get(url).toPromise()

      return response.json()
    } catch (error) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  }

}
