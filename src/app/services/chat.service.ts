import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats = [];

  constructor(private socket: SocketService) { 
    this.onReceiveMessage();
  }

  sendMessage(messageInfo){
    console.log("se envio un mensaje");
    this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo);
  }

  onReceiveMessage(){
    //console.log("se recibio un mensaje");
    this.socket.io.on("receiveMessage", (message) => {
      console.log("se recibio un mensaje");
      message.messageType = 0;
      this.chats.push(message);
    });
  }
}
