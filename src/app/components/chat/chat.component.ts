import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text: "";
  constructor(public chatService: ChatService) {
    console.log("se inicio el chat component");
  }

  ngOnInit(): void {
  }

  sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1,
    }
    this.chatService.sendMessage(messageInfo);
    this.text = "";
  }

}
