import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  constructor(public http: HttpClient) { }

  getLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(`${environment.API}libro`)
  }
}
