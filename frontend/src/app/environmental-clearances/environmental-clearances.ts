import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-environmental-clearances',
  templateUrl: './environmental-clearances.html',
  styleUrls: ['./environmental-clearances.less']
})
export class EnvironmentalClearancesComponent implements OnInit {
  clearances: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEnvironmentalClearances().subscribe(data => {
      this.clearances = data;
    });
  }
}