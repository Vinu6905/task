import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  fname = '';
  lname = '';
  phone = '';
  email = '';
  gender = '';
  file = '';
  form = '';
  date = '';
  branch = '';
  url = '';

  submitForm(form: any) {
    if (form.valid) {
      const firstName = form.value.fname;
      const lastName = form.value.lname;
      const phone = form.value.phone;
      const email = form.value.email;
      const gender = form.value.gender;
      const file = form.value.file;
      const date = form.value.date;
      const branch = form.value.branch;
      const url = form.value.url;

      alert(`First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email}\nDate:${date}\nGender :${gender}\nFile :${file}\n Branch:${branch}\nURL :${url}`);
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
