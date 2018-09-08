import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artwork } from '../../_model/artwork';
import { ArtworkService } from '../service/artwork.service';
import { ArtworkDetail } from '../../_model/artwork-detail';
import { FileUpload } from 'primeng/primeng';
import { ActivatedRoute, Params } from '@angular/router';

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
  artworkDetails: ArtworkDetail[];
  // server data
  artwork_server_data: Artwork;
  server_date: Date;
  constructor(
    private artWorkService: ArtworkService,
    private route: ActivatedRoute
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
    this.artworkDetails = [
      {
        position: 'A',
        a: 'blue',
        b: 'yellow',
        c: '',
        d: '',
        e: ''
      },
      {
        position: 'B-Felt',
        a: 'blue',
        b: 'red',
        c: '',
        d: '',
        e: ''
      }
    ];
  }

  ngOnInit() {
    this.artwork_server_data = new Artwork();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id) {
        this.artWorkService.show(this.id).subscribe(
          data => {
            this.artwork_server_data = data;
            this.server_date = new Date(data.date);
            this.artworkDetails.splice(0, 2);
            for ( let i = 0; i < this.artwork_server_data.positions.length ; i++ ) {
              var obj = {
                position: this.artwork_server_data.positions[i].name
              };
              let combos = this.artwork_server_data.positions[i].combos;
              for (let j = 0 ; j < combos.length; j++) {
                let name = combos[j].name;
                let color = combos[j].color;
                obj[name] = color;
              }
              this.artworkDetails.push(obj);
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
      this.artworkDetails
    );
    console.log(this.artwork_images);
    this.artWorkService.store(artwork).subscribe(response => {
      console.log(response);
      this.fileInput.url =
        'http://localhost:8000/artwork/' + response + '/artwork_image';
      this.fileInput.upload();
    });
    console.log(this.fileInput);
  }

  onUpload(event) {
    console.log('uploading');
  }
}

