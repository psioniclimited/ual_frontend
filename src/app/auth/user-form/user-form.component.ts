import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  profileForm = new FormGroup({
    name : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  // Name = new FormControl('');
  // Email = new FormControl('');
  // Password = new FormControl('');

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
