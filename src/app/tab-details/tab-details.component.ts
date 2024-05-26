import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuitarTabsService } from '../services/guitar-tabs-service';
import { GuitarTab } from '../models/guitar-tab.model';
@Component({
  selector: 'app-tab-details',
  standalone: true,
  imports: [],
  templateUrl: './tab-details.component.html',
  styleUrl: './tab-details.component.css'
})
export class TabDetailsComponent implements OnInit {
  id?: number;
  song?: GuitarTab;

  constructor(private route: ActivatedRoute, private guitarTabsService: GuitarTabsService) { }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.guitarTabsService.getSongById(this.id).subscribe(song => {
      this.song = song!;
    });
  }
}
