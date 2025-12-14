import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-exploration-licenses',
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
