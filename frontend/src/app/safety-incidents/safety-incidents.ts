import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-safety-incidents',
  templateUrl: './safety-incidents.html',
  styleUrls: ['./safety-incidents.less']
})
export class SafetyIncidentsComponent implements OnInit {
  incidents: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSafetyIncidents().subscribe(data => {
      this.incidents = data;
    });
  }
}