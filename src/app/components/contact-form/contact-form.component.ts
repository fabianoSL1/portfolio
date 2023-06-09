import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact';
import { Message } from 'src/app/interfaces/message';
import { FetchContactService } from 'src/app/services/fetch-contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  
  private contactService: FetchContactService;
  private subscription: Subscription;

  @Output() messageEvent: EventEmitter<Message> = new EventEmitter();

  contactInfo: Contact;
  
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  })

  constructor(contactService: FetchContactService) {
    this.contactService = contactService;
  }
  
  ngOnInit(): void {
    this.contactService.fetch()
      .subscribe(data => this.contactInfo = data as Contact);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendMessage() {
    this.messageEvent.emit(this.contactForm.value);
  }
}
