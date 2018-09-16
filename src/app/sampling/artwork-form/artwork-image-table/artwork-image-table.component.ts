import { Component, Input, OnInit } from '@angular/core';
import { OverlayPanel } from 'primeng/primeng';
import {ArtworkService} from '../../service/artwork.service';

@Component({
  selector: 'app-artwork-image-table',
  templateUrl: './artwork-image-table.component.html',
  styleUrls: ['./artwork-image-table.component.scss']
})
export class ArtworkImageTableComponent implements OnInit {
  @Input()
  artworkImages: any[];

  selectedImageUrl: string;
  display = false;
  index = 0;
  id = 0;

  constructor(private artworkService: ArtworkService) {}

  ngOnInit() {
    console.log(this.artworkImages);
  }

  selectImage(event, id: number, overlaypanel: OverlayPanel) {
    this.selectedImageUrl = 'http://localhost:8000/artwork_image/' + id;
    overlaypanel.toggle(event);
  }

  showDialog(index, id) {
    this.display = true;
    this.index = index;
    this.id = id;
  }

  removeImage() {
    console.log(this.id);
    this.artworkService.deleteArtworkImage(this.id).subscribe();
    this.artworkImages.splice(this.index, 1);
    this.display = false;
  }
}
