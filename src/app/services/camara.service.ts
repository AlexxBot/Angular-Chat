import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  imagen : File; // este atributo deberia representar la imagen

  constructor(private socket: SocketService) { 
  }
  sendImage(image){
    console.log("se envio una imagen");
    this.socket.io.emit("sendImage", image);
  }

  onReceiveImage(){
    this.socket.io.on("receiveImage", (image) => {
      console.log("se recibio la imagen del servidor");
      this.imagen = image /* as File */;

    })
  }
}
