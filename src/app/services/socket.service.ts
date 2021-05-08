import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  io = io("http://localhost:3000",{
    withCredentials: true,
    autoConnect: true
  });
  constructor() {
    /* console.log("log desde el constructor de socket service");
    this.io.emit("test", "hola mundo");
    this.io.on("test2", (valor) => {
      alert(valor);
    }); */
  }
}
