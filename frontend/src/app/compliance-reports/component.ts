import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-compliance-reports',
  templateUrl: './component.html',
  styleUrls: ['./component.less']
})
export class ComplianceReportsComponent implements OnInit {
  reports: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getComplianceReports().subscribe(data => {
      this.reports = data;
    });
  }
}