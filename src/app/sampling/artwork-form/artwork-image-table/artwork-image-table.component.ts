import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-image-table',
  templateUrl: './artwork-image-table.component.html',
  styleUrls: ['./artwork-image-table.component.scss']
})
export class ArtworkImageTableComponent implements OnInit {
  @Input()
  artworkImages: any[];

  constructor() {}

  ngOnInit() {
    console.log('testing');
    console.log(this.artworkImages[0].id);
  }

  selectImage(event, id: number) {
    console.log(id);
  }
}
