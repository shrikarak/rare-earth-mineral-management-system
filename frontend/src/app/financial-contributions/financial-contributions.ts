import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financial-contributions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-contributions.html',
  styleUrls: ['./financial-contributions.less']
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