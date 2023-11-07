import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true
})
export class AppComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();
  }  

  private getPhotos(): void {
    this.photoService.getPhotos().subscribe((data) => {
      console.log(data);
    });
  }
}
