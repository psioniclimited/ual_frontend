import { Component, Input, OnInit } from '@angular/core';
import { OverlayPanel } from 'primeng/primeng';

@Component({
  selector: 'app-artwork-image-table',
  templateUrl: './artwork-image-table.component.html',
  styleUrls: ['./artwork-image-table.component.scss']
})
export class ArtworkImageTableComponent implements OnInit {
  @Input()
  artworkImages: any[];

  selectedImageUrl: string;

  constructor() {}

  ngOnInit() {}

  selectImage(event, id: number, overlaypanel: OverlayPanel) {
    this.selectedImageUrl = 'http://localhost:8000/artwork_image/' + id;
    overlaypanel.toggle(event);
  }

  removeImage(index) {
    this.artworkImages.splice(index, 1);
  }
}
