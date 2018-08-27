import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import {User} from '../../_model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  // Name = new FormControl('');
  // Email = new FormControl('');
  // Password = new FormControl('');

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(
          '',
          Validators.compose([Validators.minLength(5), Validators.required])
        ),
        password_confirmation: new FormControl('', Validators.required)
      },
      (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      }
    );
  }

  onSubmit() {
    const user = new User(
      this.userForm.value['name'],
      this.userForm.value['email'],
      this.userForm.value['password'],
      this.userForm.value['password_confirmation']
    );
    this.userService.store(user).subscribe(
      (response) => console.log(),
      (error) => console.log()
    );
  }
}
