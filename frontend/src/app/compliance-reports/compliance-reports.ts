import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compliance-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance-reports.html',
  styleUrls: ['./compliance-reports.less']
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