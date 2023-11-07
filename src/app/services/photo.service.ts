import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly URL_API = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.URL_API);
  }
}
