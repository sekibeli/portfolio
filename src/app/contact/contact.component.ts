import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: new FormControl('', Validators.required),
    to_name: 'Admin',
    from_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),

  });

  constructor(private fb: FormBuilder) { }


  async send() {

    if (this.form.valid) {
      emailjs.init('nCGtt3YOLaW_aP1iM');
      let response = await emailjs.send("service_a5mz478", "template_hg9hb6j", {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        message: this.form.value.message,
      });

      alert('Nachricht wurde versendet!');
      this.form.reset();
    }
    else {
      console.log('Angaben fehlen!');
    }
  }

  scrollToTop(){
    document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
  }

}


