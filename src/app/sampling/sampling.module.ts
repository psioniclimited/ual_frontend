import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplingRoutingModule } from './sampling-routing.module';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule, ColorPickerModule, DropdownModule, FileUploadModule, InputTextareaModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { TableWorkComponent } from './artwork-form/table-work/table-work.component';
import { DisplayTableComponent } from './display-table/display-table.component';

@NgModule({
  imports: [
    CommonModule,
    SamplingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    TableModule,
    ButtonModule,
    ColorPickerModule,
    FileUploadModule
  ],
  declarations: [ArtworkFormComponent, TableWorkComponent, DisplayTableComponent]
})
export class SamplingModule { }
