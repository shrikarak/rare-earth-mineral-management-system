import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-mining-leases',
  templateUrl: './component.html',
  styleUrls: ['./component.less']
})
export class MiningLeasesComponent implements OnInit {
  leases: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMiningLeases().subscribe(data => {
      this.leases = data;
    });
  }
}