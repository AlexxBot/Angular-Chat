import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    console.log("entro a manejo de imagen")
    this.webcamImage = webcamImage;
  }
}
