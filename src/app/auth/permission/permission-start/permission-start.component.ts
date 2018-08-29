import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permission-start',
  templateUrl: './permission-start.component.html',
  styleUrls: ['./permission-start.component.scss']
})
export class PermissionStartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  newPermission() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
