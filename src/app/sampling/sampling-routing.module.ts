import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';
import {DisplayTableComponent} from './display-table/display-table.component';

const routes: Routes = [
  { path: 'artwork/create', component: ArtworkFormComponent },
  { path: 'artwork/display', component: DisplayTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingRoutingModule {}
