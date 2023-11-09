import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly URL_API = environment.apiUrl as unknown as string;

  constructor(private http: HttpClient) { }
  
  public getPhotos(): Observable<Photo[]> {
    console.log(this.URL_API);    
    return this.http.get<Photo[]>(this.URL_API);
  }
}
