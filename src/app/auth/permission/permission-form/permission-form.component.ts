import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../user-form/password.validator';
import { Permission } from '../../../_model/permission';
import { PermissionService } from '../../service/permission.service';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit {
  permissionForm: FormGroup;

  constructor(private permissionService: PermissionService) {}

  ngOnInit() {
    this.permissionForm = new FormGroup(
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

  onSubmit() {
    const permission = new Permission(
      this.permissionForm.value['name'],
      this.permissionForm.value['display_name'],
      this.permissionForm.value['description']
    );
    console.log(permission);
    this.permissionService
      .store(permission)
      .subscribe(response => console.log(), error => console.log());
  }
}
