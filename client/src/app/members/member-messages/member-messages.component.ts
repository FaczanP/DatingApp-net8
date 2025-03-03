import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, input, OnInit, output, ViewChild } from '@angular/core';
import { MessageService } from '../../_services/message.service';
import { Message } from '../../_models/message';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-messages',
  standalone: true,
  imports: [TimeagoModule, FormsModule],
  templateUrl: './member-messages.component.html',
  styleUrl: './member-messages.component.css'
})
export class MemberMessagesComponent {
  @ViewChild('messageForm') messageForm?: NgForm;
  messageService = inject(MessageService);
  username = input.required<string>();
  // messages = input.required<Message[]>(); section 17
  messageContent = '';
  // updateMessage = output<Message>(); section 17

  sendMessage() {
    this.messageService.sendMessage(this.username(), this.messageContent).then(() => {
      this.messageForm?.reset();
    })


    // .subscribe({next: message => {
    //   this.messageForm?.reset();
    // this.updateMessage.emit(message);   }) section 17      
  }

}


// ngOnInit(): void {
//     this.loadMessages(); section 15
// }

// loadMessages(){
//   this.messageService.getMessageThread(this.username()).subscribe({
//     next: messages => this.messages = messages
//   })
// } section 15


