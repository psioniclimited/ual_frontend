import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../user-form/password.validator';
import { Permission } from '../../../_model/permission';
import { PermissionService } from '../../service/permission.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  roleForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.roleForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),
        display_name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required])
      },
      (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      }
    );
  }

  // onSubmit() {
  //   const permission = new Permission(
  //     this.roleForm.value['name'],
  //     this.roleForm.value['display_name'],
  //     this.roleForm.value['description']
  //   );
  //   console.log(permission);
  //   this.roleService
  //     .store(permission)
  //     .subscribe(response => console.log(), error => console.log());
  // }
}
