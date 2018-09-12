import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplingRoutingModule } from './sampling-routing.module';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {
  CalendarModule,
  ColorPickerModule, DialogModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  LightboxModule,
  TabMenuModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { TableWorkComponent } from './artwork-form/table-work/table-work.component';
import { SampleCardFormComponent } from './sample-card-form/sample-card-form.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkComponent } from './artwork/artwork.component';
import {GrowlModule} from 'primeng/growl';


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
    TabMenuModule,
    GrowlModule,
    DialogModule
  ],
  declarations: [ArtworkFormComponent, TableWorkComponent, SampleCardFormComponent, ArtworkListComponent, ArtworkComponent]
})
export class SamplingModule { }
