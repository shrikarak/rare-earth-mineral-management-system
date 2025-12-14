import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mining-leases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mining-leases.html',
  styleUrls: ['./mining-leases.less']
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