import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplingRoutingModule } from './sampling-routing.module';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {
  AutoCompleteModule,
  CalendarModule,
  ColorPickerModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule, OverlayPanelModule,
  TabMenuModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { TableWorkComponent } from './artwork-form/table-work/table-work.component';
import { SampleCardFormComponent } from './sample-card-form/sample-card-form.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { GrowlModule } from 'primeng/growl';
import { ArtworkImageTableComponent } from './artwork-form/artwork-image-table/artwork-image-table.component';
import {SampleCardDetailComponent} from './sample-card-form/sample-card-detail/sample-card-detail.component';
import { SampleCardComponent } from './sample-card/sample-card.component';
import { SampleCardListComponent } from './sample-card-list/sample-card-list.component';

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
    DialogModule,
    OverlayPanelModule,
    AutoCompleteModule
  ],
  declarations: [
    ArtworkFormComponent,
    TableWorkComponent,
    SampleCardFormComponent,
    ArtworkListComponent,
    ArtworkComponent,
    ArtworkImageTableComponent,
    SampleCardDetailComponent,
    SampleCardComponent,
    SampleCardListComponent
  ]
})
export class SamplingModule {}
