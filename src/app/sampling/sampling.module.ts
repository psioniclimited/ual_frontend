import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplingRoutingModule } from './sampling-routing.module';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule, ColorPickerModule, DropdownModule, FileUploadModule, InputTextareaModule, TabMenuModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { TableWorkComponent } from './artwork-form/table-work/table-work.component';
import { SampleCardFormComponent } from './sample-card-form/sample-card-form.component';
import { SampleCardDetailComponent } from './sample-card-form/sample-card-detail/sample-card-detail.component';

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
    FileUploadModule,
    TabMenuModule
  ],
  declarations: [
    ArtworkFormComponent,
    TableWorkComponent,
    SampleCardFormComponent,
    SampleCardDetailComponent
  ]
})
export class SamplingModule { }
