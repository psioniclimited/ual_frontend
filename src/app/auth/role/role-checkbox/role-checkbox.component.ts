import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-checkbox',
  templateUrl: './role-checkbox.component.html',
  styleUrls: ['./role-checkbox.component.scss']
})
export class RoleCheckboxComponent implements OnInit {
  selectedValues: string[] = ['val1', 'val2'];
  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: any = false;
  constructor() {}

  ngOnInit() {}
}
