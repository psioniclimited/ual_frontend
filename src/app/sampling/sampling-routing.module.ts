import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';

const routes: Routes = [
  { path: 'artwork/create', component: ArtworkFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingRoutingModule {}
