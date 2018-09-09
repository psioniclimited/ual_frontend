import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import { SampleCardFormComponent } from './sample-card-form/sample-card-form.component';

const routes: Routes = [
  { path: 'artwork/create', component: ArtworkFormComponent },
  { path: 'sample-card/create', component: SampleCardFormComponent },
  // {
  //   path: 'sample-card/old',
  //   component: SampleCardComponent,
  //   children: [
  //     { path: '', component: SampleCardFormOldComponent },
  //     // { path: ':id/edit', component: SampleCardFormComponent }
  //   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingRoutingModule {}
