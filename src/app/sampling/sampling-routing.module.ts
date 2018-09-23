import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import { SampleCardFormComponent } from './sample-card-form/sample-card-form.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkComponent } from './artwork/artwork.component';
import {SampleCardComponent} from './sample-card/sample-card.component';
import {SampleCardTableComponent} from './sample-card-table/sample-card-table.component';

const routes: Routes = [
  {
    path: 'sample-card',
    component: SampleCardComponent,
    children: [
      { path: '', component: SampleCardTableComponent },
      { path: 'create', component: SampleCardFormComponent },
      { path: ':id/edit', component: SampleCardFormComponent }
    ]
  },
  {
    path: 'artwork',
    component: ArtworkComponent,
    children: [
      { path: '', component: ArtworkListComponent },
      { path: 'create', component: ArtworkFormComponent },
      { path: ':id/edit', component: ArtworkFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingRoutingModule {}
