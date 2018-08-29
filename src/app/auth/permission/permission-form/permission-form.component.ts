import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../user-form/password.validator';
import { Permission } from '../../../_model/permission';
import { PermissionService } from '../../service/permission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit, OnDestroy {
  permissionForm: FormGroup;
  editPermission: Permission;
  id: number;
  private  subscrption: Subscription;

  constructor(private permissionService: PermissionService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subscrption = this.permissionService.id.subscribe((id: number) => {
      this.id = id;
    });
    console.log('new id' + this.id);
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
  //change the id at the later date
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

  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }
}
