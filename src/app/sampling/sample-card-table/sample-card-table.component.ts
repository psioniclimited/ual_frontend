import {Component, OnInit, ViewChildren} from '@angular/core';
import {Paginate} from '../../_model/paginate';
import {LazyLoadEvent} from 'primeng/api';
import {SampleCardService} from '../service/sample-card.service';

@Component({
  selector: 'app-sample-card-table',
  templateUrl: './sample-card-table.component.html',
  styleUrls: ['./sample-card-table.component.scss']
})
export class SampleCardTableComponent implements OnInit {
  @ViewChildren('dt')
  table;
  sampleCardList: Paginate[];
  totalRecords: number;
  cols: any[];
  loading: boolean;
  constructor(private sampleCardService: SampleCardService) { }

  ngOnInit() {
    this.cols = [
      { field: 'description', header: 'Trim Description' },
      { field: 'reference_number', header: 'Reference No' },
      { field: 'combo', header: 'Combo' },
      { field: 'finishing', header: 'Finishing' },
      { field: 'brand', header: 'Brand' },
      { field: 'division', header: 'Division' },
      { field: 'submission', header: 'Submission' },
      { field: 'note', header: 'UAL REMARKS' },
      { field: 'sent_to', header: 'Sent to UAL Factory' },
      { field: 'sent_to_ho', header: 'Sent to UAL H/O' },
      { field: 'price', header: 'Price US$/DZN' },
      { field: 'sent_to_buyer', header: 'Sent to BUYER for app' },
      { field: 'sheet_date', header: 'Sample Sheet Date' },
    ];
    this.loading = true;
  }

  loadArtworks(event: LazyLoadEvent) {
    this.sampleCardService.index(event).subscribe(artworks => {
      this.totalRecords = artworks.total;
      this.sampleCardList = artworks.data;
      this.loading = false;
      console.log(this.sampleCardList);
    });
  }

}
