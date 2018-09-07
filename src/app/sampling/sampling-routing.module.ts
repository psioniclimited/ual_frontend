import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import {SampleCardFormComponent} from './sample-card-form/sample-card-form.component';
import {ArtworkListComponent} from './artwork-list/artwork-list.component';

const routes: Routes = [
  { path: 'artwork/create', component: ArtworkFormComponent },
  { path: 'sample-card/create', component: SampleCardFormComponent },
  {
    path: 'artwork',
    component: ArtworkListComponent,
    children: [
      { path: '', component: ArtworkListComponent},
      { path: ':id/edit', component: ArtworkFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingRoutingModule {}
