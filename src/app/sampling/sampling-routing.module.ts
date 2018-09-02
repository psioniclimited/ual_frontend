import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtworkFormComponent} from './artwork-form/artwork-form.component';
import { TableWorkComponent } from './table-work/table-work.component';

const routes: Routes = [
  { path: 'artwork', component: ArtworkFormComponent },
  {path: 'tablework', component: TableWorkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingRoutingModule { }
