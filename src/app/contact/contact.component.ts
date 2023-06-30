import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup =  this.fb.group ({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    message: ''
    
  });

  constructor(private fb: FormBuilder){}


  async send() {
    emailjs.init('nCGtt3YOLaW_aP1iM');
   let response = await emailjs.send("service_a5mz478", "template_hg9hb6j", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert ('Nachricht wurde versendet!');
    this.form.reset();
  }

}


