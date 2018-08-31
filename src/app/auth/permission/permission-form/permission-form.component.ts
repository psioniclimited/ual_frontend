import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../user-form/password.validator';
import { Permission } from '../../../_model/permission';
import { PermissionService } from '../../service/permission.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit, OnDestroy {
  permissionForm: FormGroup;
  editPermission: Permission;
  old_name: '';
  old_displayName: '';
  old_description: '';
  id: number;
  editMode = false;

  constructor(
    private permissionService: PermissionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });

    if (this.editMode) {
      this.permissionService.show(this.id).subscribe(
        data => {
          const permission_data = JSON.parse(JSON.stringify(data)) ;
          this.old_name = permission_data[0].name;
          this.old_displayName = permission_data[0].display_name;
          this.old_description = permission_data[0].description;
        },
        error => {
          console.log(error);
        }
      );
    }
    this.formInit();
  }

  private formInit() {
    let name: '';
    let display_name: '';
    let description: '';
    if (this.editMode) {
      name = this.old_name;
      display_name = this.old_displayName;
      description = this.old_description;
    }
    this.permissionForm = new FormGroup(
      {
        name: new FormControl(name, [
          Validators.required,
          Validators.minLength(3)
        ]),
        display_name: new FormControl(display_name, [Validators.required]),
        description: new FormControl(description, [Validators.required])
      }
    );
  }
  //change the id at the later date
  onSubmit() {
    const permission = new Permission(
      this.permissionForm.value['name'],
      this.permissionForm.value['display_name'],
      this.permissionForm.value['description']
    );
    this.permissionService
      .store(permission)
      .subscribe(response => console.log(), error => console.log());
  }

  ngOnDestroy() {}
}
