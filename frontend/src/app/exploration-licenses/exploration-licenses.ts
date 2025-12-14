import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exploration-licenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exploration-licenses.html',
  styleUrls: ['./exploration-licenses.less']
})
export class ExplorationLicensesComponent implements OnInit {
  licenses: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getExplorationLicenses().subscribe(data => {
      this.licenses = data;
    });
  }
}
