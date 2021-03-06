import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Artwork } from '../../_model/artwork';
import { ArtworkService } from '../service/artwork.service';
import { FileUpload } from 'primeng/primeng';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Position } from '../../_model/position';
import { Combo } from '../../_model/combo';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.scss']
})
export class ArtworkFormComponent implements OnInit {
  id: number;
  division: any[];
  artwork_images: any[] = [];
  @ViewChild('artworkImages')
  fileInput: FileUpload;
  date: Date;
  cols: any[];
  artworkForm: FormGroup;
  positions: Position[];
  editArtwork: Artwork;
  serverDate: Date;
  images: any[] = [];

  constructor(
    private artWorkService: ArtworkService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.division = [
      { name: 'Men', value: '0' },
      { name: 'Women', value: '1' },
      { name: 'Children', value: '2' }
    ];
    this.cols = [
      { field: 'position', header: 'Position' },
      { field: 'a', header: 'Combo A' },
      { field: 'b', header: 'Combo B' },
      { field: 'c', header: 'Combo C' },
      { field: 'd', header: 'Combo D' },
      { field: 'e', header: 'Combo E' }
    ];
    this.positions = [new Position()];
  }

  ngOnInit() {
    this.editArtwork = new Artwork();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id) {
        this.artWorkService.show(this.id).subscribe(
          data => {
            this.editArtwork = data;
            this.images = this.editArtwork.artwork_images;
            this.serverDate = new Date(data.date);
            const serverPosition = this.editArtwork.positions;
            this.positions.splice(0, this.positions.length);
            for (let i = 0; i < serverPosition.length; i++) {
              const name = serverPosition[i].name;
              const combos = serverPosition[i].combos;
              const comboArray: Combo[] = [];
              for (let j = 0; j < 5; j++) {
                if (combos[j]) {
                  comboArray.push(combos[j]);
                } else {
                  let comboName = 'a';
                  if (combos[j - 1]) {
                    comboName = String.fromCharCode(
                      combos[j - 1].name.charCodeAt(0) + 1
                    );
                  }
                  comboArray.push(new Combo(comboName));
                }
              }
              this.positions.push(new Position(name, comboArray));
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    });
    this.initForm();
  }

  initForm() {
    this.artworkForm = new FormGroup({
      reference_num: new FormControl(null),
      client_name: new FormControl(null),
      division: new FormControl(null),
      date: new FormControl(null),
      description: new FormControl(null),
      note: new FormControl(null),
      artwork_images: new FormControl(null)
    });
  }

  onSubmit() {
    const artwork = new Artwork(
      this.artworkForm.value['reference_num'],
      this.artworkForm.value['client_name'],
      this.artworkForm.value['division'].value,
      this.artworkForm.value['date'],
      this.artworkForm.value['description'],
      this.artworkForm.value['note'],
      this.artwork_images,
      this.positions
    );

    if (this.id) {
      // call the update function
      this.artWorkService.update(this.id, artwork).subscribe(
        response => {
          this.router.navigate(['../artwork']);
          this.fileInput.url = environment.api_url +
            '/artwork/' + this.id + '/artwork_image';
          this.fileInput.upload();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      // call the store function
      this.artWorkService.store(artwork).subscribe(response => {
        this.fileInput.url = environment.api_url +
          '/artwork/' + response + '/artwork_image';
        this.fileInput.upload();
        this.router.navigate(['../artwork']);
      });
    }
  }

  onUpload(event) {
    console.log('uploading');
  }
}
