import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchColorService {

  constructor(private http: HttpClient) { }


  getColors() {
    return this.http.get('assets/data/txtSwatchesColors.json');
  }
}
