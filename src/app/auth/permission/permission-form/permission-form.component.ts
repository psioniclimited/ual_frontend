import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Permission } from '../../../_model/permission';
import { PermissionService } from '../../service/permission.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit, OnDestroy {
  permissionForm: FormGroup;
  editPermission: Permission;
  id: number;

  constructor(
    private permissionService: PermissionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.editPermission = new Permission();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id) {
        this.permissionService.show(this.id).subscribe(
          data => {
            this.editPermission = data;
          },
          error => {
            console.log(error);
          }
        );
      }
    });
    this.formInit();
  }

  private formInit() {
    this.permissionForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      display_name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }
  // change the id at the later date
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
