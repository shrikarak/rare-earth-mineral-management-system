import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-financial-contributions',
  templateUrl: './component.html',
  styleUrls: ['./component.less']
})
export class FinancialContributionsComponent implements OnInit {
  contributions: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFinancialContributions().subscribe(data => {
      this.contributions = data;
    });
  }
}