import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-exploration-licenses',
  templateUrl: './component.html',
  styleUrls: ['./component.less']
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
