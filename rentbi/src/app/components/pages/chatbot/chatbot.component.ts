import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  initialMessages = [
    { role: 'ai', text: 'Hi, what are you looking for?' },
    { role: 'user', text: 'I want a bike which can do offroading!' },
  ];

}
